import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDb = async (product: TProduct) => {
  const result = await Product.create(product);
  return result;
};

const getProductsFromDb = async (searchTerm: string) => {
  let result;
  if (searchTerm) {
    result = await Product.find({
      $or: [
        { name: { $regex: searchTerm, $options: 'i' } },
        { description: { $regex: searchTerm, $options: 'i' } },
        { category: { $regex: searchTerm, $options: 'i' } },
      ],
    });
  } else {
    result = await Product.find();
  }
  return result;
};

const getSingleProductFromDb = async (productId: string) => {
  const result = await Product.findById(productId);
  return result;
};

const updateSingleProductIntoDb = async (
  productId: string,
  updateProduct: any,
) => {
  const result = await Product.findByIdAndUpdate(productId, updateProduct, {
    new: true,
  });
  return result;
};

const deleteProductFromDb = async (productId: string) => {
  const result = await Product.findByIdAndDelete(productId);
  return result;
};

export const productServices = {
  createProductIntoDb,
  getProductsFromDb,
  getSingleProductFromDb,
  updateSingleProductIntoDb,
  deleteProductFromDb,
};
