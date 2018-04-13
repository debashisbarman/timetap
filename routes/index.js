import express from 'express';
import adminRoutes from './admin';
import appointmentRoutes from './appointment';
import authRoutes from './auth';
import userRoutes from './user';
import auth from '../middlewares/auth';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/user', userRoutes);

router.use(auth);
router.use('/admin', adminRoutes);
router.use('/appointments', appointmentRoutes);

export default router;
