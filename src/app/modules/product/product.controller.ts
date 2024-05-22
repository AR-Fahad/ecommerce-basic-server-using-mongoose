import { Request, Response } from 'express';
import { productServices } from './product.service';

const { createProductIntoDb, getProductsFromDb, getSingleProductFromDb } =
  productServices;

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
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
      error: err,
    });
  }
};

const getProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result = await getProductsFromDb(searchTerm as string);
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
      error: err,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await getSingleProductFromDb(productId);
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
      error: err,
    });
  }
};

export const productControllers = {
  createProduct,
  getProducts,
  getSingleProduct,
};
