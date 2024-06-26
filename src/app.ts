import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { productRouter } from './app/modules/product/product.routes';
import { orderRouter } from './app/modules/order/order.routes';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// routes
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to ecommerce-basic-server');
});

// routes handling
app.all('*', (req: Request, res: Response) => {
  res.status(500).json({
    success: false,
    message: 'Route not found',
  });
});

// global error handling
app.use((error: any, req: Request, res: Response) => {
  if (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
      error,
    });
  }
});

export default app;
