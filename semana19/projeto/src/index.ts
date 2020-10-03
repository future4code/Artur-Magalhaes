import dotenv from 'dotenv';
import {AddressInfo} from 'net';
import express from 'express';
import { userRouter } from './router/UserRouter'
import { musicalGroupRouter } from './router/MusicalGroupRouter';
import { showRouter } from './router/ShowRouter';

dotenv.config();

const app = express();
app.use(express.json());

app.use("/user", userRouter);
app.use("/musicalgroup", musicalGroupRouter);
app.use("/shows", showRouter);

const server = app.listen(3000, () => {
    if(server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});