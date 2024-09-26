import { Request, Response } from 'express';
import { Customer } from '../models/customerModel';

class customerController {
    
    constructor () {

    }

    async getCustomer(req: Request, res: Response) {
        try {
            const data = await Customer.find();
            res.status(200).json(data);
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }

    }


}

export default new customerController;