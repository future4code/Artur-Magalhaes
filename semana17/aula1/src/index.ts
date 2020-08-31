import knex from 'knex';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import { AddressInfo } from 'net';
import { UserDataBase } from './data/UserDataBase';
import { IdGenerator } from './service/IdGenerator';
import { Authenticator } from './service/Authenticator';

dotenv.config();

const app = express();
app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`)
    }
});

const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    }
});

//const user = new CreateUser()
//user.createUsers("002", "Artur2", "arturmm2", "123456","artur2@gmail.com");

app.post('/signup', async (req: Request, res: Response) => {
    try {
        if(!req.body.email || req.body.email.indexof("@") === -1){
            throw new Error("Invalid email");
        }

        if(!req.body.password || req.body.password.length < 6){
            throw new Error("Invalid password");
        }

        const data = {
            'name': req.body.name,
            'nickname': req.body.nickname,
            'email': req.body.email,
            'password': req.body.password,
        }
        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const user = new UserDataBase()
        await user.createUsers(id, data.name, data.nickname, data.password, data.email);

        const authenticator = new Authenticator();
        const token = authenticator.generateToken({
            id,
        });

        res.status(200).send({
            token
        });
    } catch (error) {
        res.status(400).send({
            message: error.message,
        })
    }
})

app.get('/signin', async (req: Request, res: Response) => {
    try {
        if (!req.body.email || req.body.email.indexOf('@') === -1){
            throw new Error ("Invalid Email")
        }
        const data = {
            'email': req.body.email,
            'password': req.body.password,
        }
        const user = new UserDataBase();
        const result = await user.signIn(data.email, data.password)
        
        const authenticator = new Authenticator()
        const token = authenticator.generateToken(result[0].id)

        res.status(200).send({
            "token": token})
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})

app.get('/user/profile', async (req: Request, res: Response) => {
    try {
        const user = new UserDataBase();
        const authenticator = new Authenticator();

        const auth = authenticator.getData(req.headers.authorization as string);

        const result = await user.getUsers(auth.id);
        res.status(200).send(result)
    } catch (error) {
        res.status(401).send({
            message: error.message
        })
    }
})