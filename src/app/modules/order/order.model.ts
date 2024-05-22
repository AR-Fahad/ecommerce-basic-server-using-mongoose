import { Schema, model } from 'mongoose';
import { TOrder } from './order.interface';

const orderSchema = new Schema<TOrder>({
  email: {
    type: String,
    required: [true, 'email type is required'],
  },
  productId: {
    type: String,
    required: [true, 'productId type is required'],
  },
  price: {
    type: Number,
    required: [true, 'price type is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'quantity type is required'],
  },
});

export const Order = model<TOrder>('Order', orderSchema);
