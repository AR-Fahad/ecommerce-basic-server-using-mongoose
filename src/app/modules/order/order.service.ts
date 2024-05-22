import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrderIntoDb = async (order: TOrder) => {
  const result = await Order.create(order);
  return result;
};

const getOrdersFromDb = async (email: string) => {
  let result;
  if (email) {
    result = await Order.find({ email });
  } else {
    result = await Order.find();
  }
  return result;
};

export const orderServices = {
  createOrderIntoDb,
  getOrdersFromDb,
};
