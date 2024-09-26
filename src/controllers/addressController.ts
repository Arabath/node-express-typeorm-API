import { Request, Response } from "express";
import { Address } from '../models/addressModel'

class addressController {

    constructor() {

    }

    async getAddress(req: Request, res: Response) {
        try {
            const data = await Address.find();
            res.status(200).json(data);
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }

    }

}

export default new addressController;