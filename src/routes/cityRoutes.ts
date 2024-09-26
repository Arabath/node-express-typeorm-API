import express from 'express';
import cityController from '../controllers/cityController';
const router = express.Router();

router.get('/', cityController.getCity);

export default router;