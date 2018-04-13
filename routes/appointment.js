import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  console.log(req);
  res.status(200).json({
    success: true,
    message: `Hello, ${req.decoded.name}!`
  });
});

export default router;
