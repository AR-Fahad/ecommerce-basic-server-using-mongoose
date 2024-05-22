import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { productRouter } from './app/modules/product/product.routes';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// routes
app.use('/api/products', productRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to ecommerce-basic-server');
});

// routes handling
app.all('*', (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: 'Invalid routing!',
  });
});

// global error handling
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: 'Something went wrong!',
      error,
    });
  }
});

export default app;
