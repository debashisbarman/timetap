import express from 'express';
import validate from 'express-validation';
import userController from '../controllers/user';
import validations from './validations/user';

const router = express.Router();

router.post('/createUser', validate(validations.createUser), userController.createUser);

export default router;
