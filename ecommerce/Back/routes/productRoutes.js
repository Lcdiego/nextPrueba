import express from 'express';
import { addProduct, getProducts } from '../controllers/productController.js';
import { authMiddleware, adminMiddleware } from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

router.post('/upload', authMiddleware, adminMiddleware, upload.single('image'), (req, res) => {
  res.status(200).json({ imagePath: `/${req.file.path}` });
});

router.route('/')
  .get(getProducts)
  .post(authMiddleware, adminMiddleware, addProduct);

export default router;
