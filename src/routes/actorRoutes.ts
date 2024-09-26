import express from 'express';
import actorController from '../controllers/actorController';
const router = express.Router();

router.get('/', actorController.getActor);

export default router;