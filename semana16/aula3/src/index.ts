import express, { Request, Response } from 'express';
import { AddressInfo} from 'net';
import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || '3306'),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    }
})

const app = express();

app.use(express.json());

const server = app.listen(process.env.DB_PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.log(`Failure upon starting server.`)
    }
})

//QUERIES RAW

const getActorById = async(id: string): Promise<any> => {
    try{
        const result = await connection.raw(`
            SELECT * FROM actor WHERE id = '${id}'
        `)
        console.log(result[0][0])

        return result[0][0]
    } catch (error) {
        console.log(error)
    }
}

//getActorById("001")

const getActorByName = async(name: string): Promise<any> => {
    try {
        const result = await connection.raw(`
        SELECT * FROM actor WHERE name = '${name}'`);    
        console.log(result[0][0])
        return result[0][0]
    } catch (error) {
        console.log(error);
    }
}

//getActorByName("Tony Ramos");

const getQuantityGender = async (gender: string) => {
    try{
        const result = await connection.raw(`
        SELECT COUNT(*) as count FROM actor WHERE gender = '${gender}'
    `);
    return result[0][0].count
    } catch (error) {
        console.log(error)
    }
}

//getQuantityGender("male")


//QUERIES BUILDERS
const updateSalary = async(salary: number, id: string): Promise<any> => {
    try {
        await connection('actor') 
                                .update({salary:salary})
                                .where("id", id)
        console.log("Sucesso!")
    } catch (error) {
        console.log(error)
    }
}

//updateSalary(500000, "001");

const deleteActorId = async (id: string): Promise<any> => {
    try {
        await connection('actor')
                .delete()
                .where("id", id)
        console.log("Sucesso ao deletar");
    } catch (error) {
        console.log(error); 
    }
}

//deleteActorId("001");

const avgSalaryGender = async (gender: string): Promise<any> => {
    try {
        console.log(await connection('actor')
                .avg("salary as average")
                .where("gender", gender))
    } catch (error) {
        console.log(error)
    }
}

//avgSalaryGender("male")

// ENDPOINT EXPRESS
app.get('/actor/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const actor = await getActorById(id);
        res.status(200).send(actor)
    } catch (error) {
        res.status(400).send({
            message: error.message,
        })
    }
})

app.get('/actor/gender/:gender', async (req: Request, res: Response) => {
    try {  
        const gender = req.params.gender
        const count = await getQuantityGender(gender);
        res.status(200).send({
            quantity: count
        })
    } catch(error) {
        res.status(400).send({
            message: error.message,
        })
    }
})
/*
app.post('/actor', async(req: Request, res: Response) => {
    try {
        await createActor (
            req.body.id,
            req.body.name,
            req.body.salary,
            new Date(req.body.birth_date),
            req.body.salary,
        );
        res.status(200).send();
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})*/

app.put('/actor', async(req: Request, res: Response) => {
    try{
        await updateSalary(
            req.body.salary, 
            req.body.id
            )
        res.status(200).send("Salario atualizado")
    } catch(error) {
        res.status(400).send({
            message: error.message
        })
    }
})

app.delete('/actor/:id', async(req: Request, res: Response) => {
    try{
        const id = req.params.id;
        await deleteActorId(id)
        res.status(200).send("Deletado!")
    } catch(error) {
        res.status(400).send({
            message: error.message
        })
    }
})

//TABELA DE FILME
const createMovie = async(
    id: string, name: string, sinopse: string, 
    release_date: Date) => {
        try {
            await connection
                    .insert({id,name,sinopse,release_date
                    })
                    .into("filme")
        } catch (error) {
            console.log(error)
        }
    }

app.post('/movie', async(req: Request, res: Response) => {
    try{
        await createMovie(req.body.id, req.body.name,
        req.body.sinopse, req.body.release_date)
        res.status(200).send("Filme Adicionado")
    } catch(error) {
        res.status(400).send({
            message: error.message
        })
    }
})

const getFifteenMovies = async (): Promise<any> => {
    try {
        const result = await connection
            .select("*")
            .from("filme")
            .limit(15)
        return result;
    } catch (error) {
        
    }
}

app.get('/movie/all', async(req: Request, res: Response) => {
    try {
        const result = await getFifteenMovies()
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})

const getSearchMovie = async(search: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM filme WHERE( name LIKE "%${search}%" OR sinopse LIKE "%${search}%" )
    `)
    return result[0];
}

app.get("/movie/search", async(req: Request, res: Response) => {
    try {
        const movie = await getSearchMovie(req.query.query as string);
        res.status(200).send({
            movie: movie,
        });
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})