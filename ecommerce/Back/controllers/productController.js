import Product from '../models/producto.js';

const addProduct = async (req, res) => {
  const { name, price, description, imagePath } = req.body;

  try {
    const newProduct = new Product({
      name,
      price,
      description,
      image: imagePath,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error adding product', error });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
};

export { addProduct, getProducts };
