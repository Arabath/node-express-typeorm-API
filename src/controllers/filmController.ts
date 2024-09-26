import { Request, Response } from 'express';
import { Film } from '../models/filmModel';

class filmController {
    
    constructor () {

    }

    async getFilm(req: Request, res: Response) {
        try {
            const data = await Film.find();
            res.status(200).json(data);
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }

    }


}

export default new filmController;