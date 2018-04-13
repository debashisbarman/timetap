import express from 'express';
import adminRoutes from './admin';
import appointmentRoutes from './appointment';
import authRoutes from './auth';
import userRoutes from './user';
import auth from '../middlewares/auth';

const router = express.Router();

router.get('/api-status', (req, res) =>
  res.status(200).json({
    success: true,
    params: {
      message: 'Sucessful, TimeTap API is running.'
    }
  }));

router.use('/auth', authRoutes);
router.use('/user', userRoutes);

router.use(auth);
router.use('/admin', adminRoutes);
router.use('/appointments', appointmentRoutes);

export default router;
