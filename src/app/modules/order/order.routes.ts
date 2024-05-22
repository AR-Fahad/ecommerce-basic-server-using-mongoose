import express, { Request, Response } from 'express';
import { orderControllers } from './order.controller';

export const orderRouter = express.Router();
const { createOrder, getOrders } = orderControllers;

orderRouter.post('/', createOrder);

orderRouter.get('/', getOrders);
