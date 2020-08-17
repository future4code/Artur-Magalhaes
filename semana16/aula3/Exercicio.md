# Exercicio

## 1.
a)  Retorna um objeto RowDataPacket {
      id: '001',
      name: 'Tony Ramos',
      salary: 400000,
      birth_date: 1948-08-25T03:00:00.000Z,
      gender: 'male',
      favorite_ice_cream_flavor: null,
      type: 'NotDirector'
    }
b)  const getActorByName = async(name: string): Promise<any> => {
    try {
        const result = await connection.raw(`
        SELECT * FROM actor WHERE name = '${name}'`);    
        console.log(result[0][0])
        return result[0][0]
    } catch (error) {
        console.log(error);
    }
}
c)  const getQuantityGender = async () => {
    try{
        const result = await connection.raw(`
        SELECT COUNT(*),gender FROM actor GROUP BY gender
    `);
    console.log(result[0])
    return result[0]
    } catch (error) {
        console.log(error)
    }
}

## 2.
a)  const updateSalary = async(salary: number, id: string): Promise<any> => {
    try {
        await connection('actor') 
                                .update({salary:salary})
                                .where("id", id)
        console.log("Sucesso!")
    } catch (error) {
        console.log(error)
    }
}
b)  const deleteActorId = async (id: string): Promise<any> => {
    try {
        await connection('actor')
                .delete()
                .where("id", id)
        console.log("Sucesso ao deletar");
    } catch (error) {
        console.log(error); 
    }
}
c)  const avgSalaryGender = async (gender: string): Promise<any> => {
    try {
        console.log(await connection('actor')
                .avg("salary as average")
                .where("gender", gender))
    } catch (error) {
        console.log(error)
    }
}

## 3.
a)  Para pegar o parametro chamado id da URL.
b)  São as respostas das requisições.
c)app.get('/actor/gender/:gender', async (req: Request, res: Response) => {
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

## 4.
a)  app.put('/actor', async(req: Request, res: Response) => {
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
b)  app.delete('/actor/:id', async(req: Request, res: Response) => {
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

## 5. 
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


## 6.
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

## 7.
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