import { Request, Response } from 'express';
import { Country } from '../models/countryModel';

class countryController {
    
    constructor () {

    }

    async getCountry(req: Request, res: Response) {
        try {
            const data = await Country.find();
            res.status(200).json(data);
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }

    }


}

export default new countryController;