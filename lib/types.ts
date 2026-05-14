export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: "sale" | "new" | "hot" | "limited";
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type CartAction =
  | { type: "ADD_ITEM"; product: Product }
  | { type: "REMOVE_ITEM"; productId: number }
  | { type: "UPDATE_QUANTITY"; productId: number; quantity: number }
  | { type: "CLEAR_CART" };

export interface CartState {
  items: CartItem[];
}
