import express from 'express';
import validate from 'express-validation';
import authController from '../controllers/auth';
import validations from './validations/auth';

const router = express.Router();

router.post('/token', validate(validations.createAccessToken), authController.createAccessToken);

export default router;
