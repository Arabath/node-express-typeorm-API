import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';

import actorRoutes from './routes/actorRoutes';
import addressRoutes from './routes/addressRoutes';
import categoryRoutes from './routes/categoryRoutes';
import cityRoutes from './routes/cityRoutes';
import countryRoutes from './routes/countryRoutes';
import customerRoutes from './routes/customerRoutes';
import filmRoutes from './routes/filmRoutes';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    console.log('Hola mundo');
    res.send("Hola mundo");
});


//ROUTES
app.use("/Actor", actorRoutes);
app.use("/Address", addressRoutes);
app.use("/Category", categoryRoutes);
app.use("/City", cityRoutes);
app.use("/Country", countryRoutes);
app.use("/Customer", customerRoutes);
app.use("/Film", filmRoutes);

export default app;