import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';

import actorRoutes from './routes/actorRoutes';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    console.log('Hola mundo');
    res.send("Hola mundo");
});


//ROUTES
app.use("/Actor", actorRoutes)

export default app;