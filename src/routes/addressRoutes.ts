import express from 'express';
import addressController from '../controllers/addressController';
const router = express.Router();

router.get('/', addressController.getAddress);

export default router;