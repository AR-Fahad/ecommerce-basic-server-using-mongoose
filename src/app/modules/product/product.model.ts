import { Schema, model } from 'mongoose';
import { TInventory, TProduct, TVariants } from './product.interface';

// Schema

const variantsSchema = new Schema<TVariants>(
  {
    type: {
      type: String,
      required: [true, 'variant type is required'],
    },
    value: {
      type: String,
      required: [true, 'value type is required'],
    },
  },
  {
    _id: false,
  },
);

const inventorySchema = new Schema<TInventory>(
  {
    quantity: {
      type: Number,
      required: [true, 'quantity is required'],
    },
    inStock: {
      type: Boolean,
      required: [true, 'inStock type is required'],
    },
  },
  { _id: false },
);

// main Schema
const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: [true, 'name type is required'],
  },
  description: {
    type: String,
    required: [true, 'description type is required'],
  },
  price: {
    type: Number,
    required: [true, 'price type is required'],
  },
  category: {
    type: String,
    required: [true, 'category type is required'],
  },
  tags: {
    type: [String],
    required: [true, 'tags type is required'],
  },
  variants: {
    type: [variantsSchema],
    required: [true, 'variants type is required'],
  },
  inventory: {
    type: inventorySchema,
    required: [true, 'inventory type is required'],
  },
});

// model
export const Product = model<TProduct>('Product', productSchema);
