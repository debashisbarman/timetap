import express from 'express';
import adminController from '../controllers/admin';

const router = express.Router();

router.get('/listUsers', adminController.listUsers);

export default router;
