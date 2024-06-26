import { Request, Response } from 'express';
import { productServices } from './product.service';
import productValidationSchema from './product.validation';
import { TProduct } from './product.interface';

const {
  createProductIntoDb,
  getProductsFromDb,
  getSingleProductFromDb,
  updateSingleProductIntoDb,
  deleteProductFromDb,
} = productServices;

const createProduct = async (req: Request, res: Response) => {
  try {
    const product: TProduct = req.body;

    // data validation
    const parsedProduct = productValidationSchema.parse(product);

    const result = await createProductIntoDb(parsedProduct);
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
    if (searchTerm) {
      res.status(200).json({
        success: true,
        message: `Products matching search term '${searchTerm}' fetched successfully!`,
        data: result,
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'Products fetched successfully!',
        data: result,
      });
    }
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

const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateProduct = req.body;
    const result = await updateSingleProductIntoDb(productId, updateProduct);
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
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

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await deleteProductFromDb(productId);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: result && null,
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
  updateSingleProduct,
  deleteProduct,
};
