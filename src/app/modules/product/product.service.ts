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

export const productServices = {
  createProductIntoDb,
  getProductsFromDb,
  getSingleProductFromDb,
};
