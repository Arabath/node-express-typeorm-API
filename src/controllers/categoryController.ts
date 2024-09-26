import { Request, Response } from "express";
import { Category } from '../models/categoryModel';

class categoryModel {

    constructor() {

    }

    async getCategory(req: Request, res: Response) {
        try {
            const data = await Category.find();
            res.status(200).json(data);
        }catch (err) {
            if ( err instanceof Error )
                res.status(500).send(err.message);
        }
    }
}

export default new categoryModel;