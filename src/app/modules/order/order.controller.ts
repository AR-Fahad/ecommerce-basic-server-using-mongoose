import { Request, Response } from 'express';
import { orderServices } from './order.service';
import { productServices } from '../product/product.service';
import { TOrder } from './order.interface';
import orderValidationSchema from './order.validation';

const { getSingleProductFromDb, updateSingleProductIntoDb } = productServices;

const { createOrderIntoDb, getOrdersFromDb } = orderServices;

const createOrder = async (req: Request, res: Response) => {
  try {
    const order: TOrder = req.body;

    // order validation
    const parsedOrder = orderValidationSchema.parse(order);

    const isExist: any = await getSingleProductFromDb(order.productId);
    if (isExist?.inventory?.quantity >= order.quantity) {
      const remains: number = isExist?.inventory?.quantity - order.quantity;
      const updateInventory = {
        inventory: {
          quantity: remains,
          inStock: remains === 0 ? false : true,
        },
      };
      const result = await createOrderIntoDb(parsedOrder);
      await updateSingleProductIntoDb(order.productId, updateInventory);
      res.status(200).json({
        success: true,
        message: 'Order created successfully!',
        data: result,
      });
    } else {
      res.status(200).json({
        success: false,
        message: 'Insufficient quantity available in inventory',
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Product is not exists',
      error: err,
    });
  }
};

const getOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    const result = await getOrdersFromDb(email as string);
    if (email) {
      res.status(200).send({
        success: true,
        message: 'Orders fetched successfully for user email!',
        data: result,
      });
    } else {
      res.status(200).send({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      });
    }
  } catch (err) {
    res.status(500).send({
      success: true,
      message: 'Something went wrong!',
      error: err,
    });
  }
};

export const orderControllers = {
  createOrder,
  getOrders,
};
