import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
}, {
  timestamps: true,
});

const Product = mongoose.model('ProductosEcproducts', productSchema);

export default Product;
