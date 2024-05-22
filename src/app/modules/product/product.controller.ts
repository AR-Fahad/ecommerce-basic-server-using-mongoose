import { Request, Response } from 'express';
import { productServices } from './product.service';

const { createProductIntoDb } = productServices;

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await createProductIntoDb(product);
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (err) {
    res.status(200).json({
      success: false,
      message: 'Something went wrong!',
      error: err,
    });
  }
};

export const productControllers = {
  createProduct,
};
