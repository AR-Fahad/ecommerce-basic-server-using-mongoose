import express from 'express';
import { productControllers } from './product.controller';

const {
  createProduct,
  getProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteProduct,
} = productControllers;

export const productRouter = express.Router();

productRouter.post('/', createProduct);

productRouter.get('/', getProducts);

productRouter.get('/:productId', getSingleProduct);

productRouter.put('/:productId', updateSingleProduct);

productRouter.delete('/:productId', deleteProduct);
