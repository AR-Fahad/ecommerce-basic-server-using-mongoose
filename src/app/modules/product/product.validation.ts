import { z } from 'zod';

const variantsValidationSchema = z.object({
  type: z.string().nonempty('variant type is required'),
  value: z.string().nonempty('value type is required'),
});

const inventoryValidationSchema = z.object({
  quantity: z.number().min(0, 'quantity is required'),
  inStock: z
    .boolean()
    .refine((val) => val !== undefined, 'inStock type is required'),
});

const productValidationSchema = z.object({
  name: z.string().nonempty('name type is required'),
  description: z.string().nonempty('description type is required'),
  price: z.number().nonnegative('price type is required'),
  category: z.string().nonempty('category type is required'),
  tags: z.array(z.string().nonempty('tags type is required')),
  variants: z
    .array(variantsValidationSchema)
    .nonempty('variants type is required'),
  inventory: inventoryValidationSchema,
});

export default productValidationSchema;
