import { Request, Response } from 'express';
import { City } from '../models/cityModel';

class cityController {

    constructor () {

    }

    async getCity(req: Request, res: Response) {
        try {
            const data = await City.find();
            res.status(200).json(data);
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }

    }


}

export default new cityController;