import express, { Request, Response } from 'express';
import { AddressInfo } from 'net';
import dotenv from 'dotenv';
import knex from 'knex';

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

dotenv.config();

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
});

enum STATUS {
    TO_DO = "to do",
    DOING = "doing",
    DONE = "done"
}

// CREATE TABLES
const createTableUser = async(): Promise<void> => {
    try {
        await connection.raw(`
            CREATE TABLE user (
                id INT PRIMARY KEY AUTO_INCREMENT,
                name VARCHAR(255) NOT NULL,
                nickname VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL 
            );
        `);
    } catch (error) {
        console.log(error);
    }
}

const createTableTask = async(): Promise<void> => {
    try {
        await connection.raw(`
            CREATE TABLE task (
                id INT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                description TEXT,
                limit_date DATE NOT NULL,
                status ENUM("to do", "doing", "done"),
                user_id INT NOT NULL,
                FOREIGN KEY (user_id) REFERENCES user(id)
            );
        `);
    } catch (error) {
        console.log(error)
    }
}

//=====================================================
//FUNÇÕES

//USER
const createUser = async(name: string, nickname: string, email: string): Promise<void> => {
    try {
        await connection.raw(`
            INSERT INTO User(name,nickname,email) 
            VALUES ("${name}", "${nickname}", "${email}");
        `);
    } catch (error) {
        console.log(error);
    }
}

const getUserId = async(id: number): Promise<any> => {
    try {
        const result = await connection.raw(`
            SELECT id,nickname FROM User WHERE id = "${id}"
        `);
        return result[0][0]
        
    } catch (error) {
        console.log(error)
    }
}

const editUserId = async(id: Number, name: string, nickname: string): Promise<any> => {
    try {
        await connection.raw(`
            UPDATE User 
            SET name = "${name}", nickname = "${nickname}"
            WHERE id = ${id} 
        `)
    } catch (error) {
        console.log(error)
    }
}


//TASK
const createTask = async(title: string, description: string, limit_date: Date, status: string, user_id: number) => {
    try {
        await connection
                .insert({
                    title, 
                    description, 
                    limit_date, 
                    status, 
                    user_id
                })
                .into("Task");
    } catch (error) {
        console.log(error);
    }
}

const getTaskId = async(id: number) => {
    try {
        const result = await connection.raw(`
            SELECT * FROM Task 
            INNER JOIN User
            ON Task.user_id = User.id
            WHERE Task.id = ${id};
        `);
        return result[0][0];
    } catch (error) {
        console.log(error)
    }
}

//====================================================
//ENDPOINTS
app.post('/user', async (req: Request, res: Response) => {
    try {
        await createUser(req.body.name, req.body.nickname,req.body.email)
        res.status(200).send("Usuário criado com sucesso!")
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})

app.get('/user/:id', async(req: Request, res: Response) => {
    try {
        const id = req.params.id
        const user = await getUserId(Number(id))
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})

app.put('/user/edit/:id', async(req:Request, res: Response) => {
    try {
        const id = req.params.id
        await editUserId(Number(id), req.body.name, req.body.nickname)
        res.status(200).send("Usuário editado!")
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})

app.post('/task', async(req:Request, res:Response) => {
    try{
        const limitDate = formatDate(req.body.limit_date)
        await createTask(req.body.title, req.body.description, new Date(limitDate), req.body.status, Number(req.body.user_id));
        res.status(200).send("Tarefa criada")
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})

app.get('/task/:id', async(req:Request, res:Response) => {
    try{
        const task = await getTaskId(Number(req.params.id))
        const result = {
            "taskId": task.id,
            "title": task.title,
            "description": task.description,
            "limitDate": formatDateDB(new Date(task.limit_date)),
            "status": task.status,
            "creatorUserId": task.user_id,
            "creatorUserNickname": task.nickname
        }
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})


//OTHER FUNCTIONS
function formatDate(date: string): string {
    const numbers = date.split("/");
    const dateFormat = numbers[2] + "-" + numbers[1] + "-" + numbers[0];
    return dateFormat;
}

function formatDateDB(date: Date): string {
    let d
    let m
    let month = date.getMonth() + 1
    let day = date.getDate()
    
    day < 10 ? d = "0" + String(day) : d = day
    month < 10 ? m = "0" + String(month) : m = month 
    const year = date.getFullYear()
    
    const dateFormat = d + "/" + m + "/" + year
    return dateFormat;
}
