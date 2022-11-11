import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

import "reflect-metadata";
import express from 'express';
import cors from 'cors';
import { router } from './routes';

const app = express();
app.use(express.json());
//app.use(express.urlencoded({ extended: false }));// dps mudar para true e testar
app.use(cors());

//app.use(express.urlencoded({ extended: false }))

app.use(router);

app.listen(3000, () => {
     console.log('🚀 On-stock server is running in port 3000');
})