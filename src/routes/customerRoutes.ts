import express from 'express';
import customerController from '../controllers/customerController';
const router = express.Router();

router.get('/', customerController.getCustomer);

export default router;