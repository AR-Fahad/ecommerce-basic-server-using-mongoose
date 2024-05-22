export type TVariants = { type: string; value: string };

export type TInventory = {
  quantity: number;
  inStock: boolean;
};

// main doc type/interface
export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: Array<TVariants>;
  inventory: TInventory;
};
