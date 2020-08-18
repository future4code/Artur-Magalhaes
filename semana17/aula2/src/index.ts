import { UserDB } from "./data/UserDB";
import express, { Request, Response } from 'express';
import { AddressInfo } from "net";
import { IdGenerator } from "./services/IdGenerator";
import { HashManager } from "./services/HashManager";
import { Authenticator } from "./services/Authenticatior";

const app = express();
app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
})

const user = new UserDB()
const password = new HashManager()

app.post('/signup', async (req: Request, res: Response) => {
    try {
        if(!req.body.email || req.body.email.indexOf('@') === -1){
            throw new Error ("Invalid Email");
        }

        if(!req.body.password || req.body.password.length < 6){
            throw new Error ("Invalid Password");
        }

        const data = {
            'name': req.body.name,
            'nickname': req.body.nickname,
            'email': req.body.email,
            'password': req.body.password,
        }

        const id = new IdGenerator();

        const isPassword = await password.hash(data.password)
        
        user.createUsers(id.generate(), data.name, data.nickname, isPassword, data.email)
        res.status(200).send({
            message: 'Usuário criado'
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
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

        const result = await user.signIn(data.email)

        const isPassword = await password.compare(req.body.password, result[0].password)
        if(!isPassword){
            throw new Error("Invalid Password")
        } 

        const authenticator = new Authenticator()
        const token = authenticator.generateToken(result[0].id)

        res.status(200).send({
            "token": token
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})