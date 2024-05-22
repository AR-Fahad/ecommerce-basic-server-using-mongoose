export type TTags = string[]; // Also can use Array<string> instead of string[]

export type TVariants = Array<{ type: string; value: string }>;

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
  tags: TTags;
  variants: TVariants;
  inventory: TInventory;
};
