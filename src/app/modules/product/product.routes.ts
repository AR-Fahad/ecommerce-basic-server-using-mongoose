import express from 'express';
import { productControllers } from './product.controller';

const { createProduct } = productControllers;

export const productRouter = express.Router();

productRouter.post('/', createProduct);
