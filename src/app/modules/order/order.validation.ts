import { z } from 'zod';

const orderValidationSchema = z.object({
  email: z.string().email('Invalid email address'),
  productId: z.string().nonempty('productId is required'),
  price: z.number().nonnegative('price must be a non-negative number'),
  quantity: z.number().int().positive('quantity must be a positive integer'),
});

export default orderValidationSchema;
