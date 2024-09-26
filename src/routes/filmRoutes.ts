import express from 'express';
import filmController from '../controllers/filmController';
const router = express.Router();

router.get('/', filmController.getFilm);

export default router;