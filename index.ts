import express from "express";
import * as dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import mainRouter from './src/routes/index';
import {mongoConnector} from "./src/database/connectors/mongoDB";

const app = express();
const mongoLink = process.env.MONGO || 'mongodb+srv://Evoluscan:IxHpbkrmazvmkvf8@cluster0.4al0yej.mongodb.net/?retryWrites=true&w=majority';

dotenv.config();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(helmet());
app.use(cors());
app.use('/api', mainRouter);


mongoConnector(mongoLink);


app.listen(process.env.PORT, ()=> {
    console.log("Server is listening..."); 
});