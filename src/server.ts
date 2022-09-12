//Libs
import express, { json } from 'express';
import cors from "cors";
import 'dotenv/config';
import 'express-async-errors';

//Main Route
import router from './routes/index';

//Error Handler
import { errorHandler } from './middlewares/errorHandler.middleware';

//Configs
const server = express();

server.use(cors());
server.use(json());

server.use(router);

server.use(errorHandler)

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Servidor tá rodando mais que a bola quadrada do Quico, na porta ${PORT}.`);
});