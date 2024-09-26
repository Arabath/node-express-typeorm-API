import { Request, Response } from "express";
import { Actor } from '../models/actorModel'

class actorController {

    constructor() {

    }

    async getActor(req: Request, res: Response) {
        try {
            const data = await Actor.find();
            res.status(200).json(data);
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }

    }

}

export default new actorController;