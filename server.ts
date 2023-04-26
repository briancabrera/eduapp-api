import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import { checkMysqlConnection } from './core/health';


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT: number = 3009;

app.listen(PORT, () => {
    console.log(`Facts Events service listening at http://localhost:${PORT}`)
    checkMysqlConnection();
})
