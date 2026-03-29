"use client";

import React, { createContext, useContext, useReducer, useEffect } from "react";
import type { Product, ProductVariant } from "@/lib/products";

export interface CartItem {
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: "ADD_ITEM"; product: Product; variant: ProductVariant }
  | { type: "REMOVE_ITEM"; productId: string; variantId: string }
  | { type: "UPDATE_QUANTITY"; productId: string; variantId: string; quantity: number }
  | { type: "CLEAR_CART" }
  | { type: "OPEN_CART" }
  | { type: "CLOSE_CART" }
  | { type: "TOGGLE_CART" }
  | { type: "HYDRATE"; items: CartItem[] };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "HYDRATE":
      return { ...state, items: action.items };

    case "ADD_ITEM": {
      const existing = state.items.find(
        (i) => i.product.id === action.product.id && i.variant.id === action.variant.id
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.product.id === action.product.id && i.variant.id === action.variant.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { product: action.product, variant: action.variant, quantity: 1 }],
      };
    }

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter(
          (i) => !(i.product.id === action.productId && i.variant.id === action.variantId)
        ),
      };

    case "UPDATE_QUANTITY":
      if (action.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (i) => !(i.product.id === action.productId && i.variant.id === action.variantId)
          ),
        };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.product.id === action.productId && i.variant.id === action.variantId
            ? { ...i, quantity: action.quantity }
            : i
        ),
      };

    case "CLEAR_CART":
      return { ...state, items: [] };

    case "OPEN_CART":
      return { ...state, isOpen: true };

    case "CLOSE_CART":
      return { ...state, isOpen: false };

    case "TOGGLE_CART":
      return { ...state, isOpen: !state.isOpen };

    default:
      return state;
  }
}

interface CartContextValue {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  totalItems: number;
  totalPrice: number;
  addItem: (product: Product, variant: ProductVariant) => void;
  removeItem: (productId: string, variantId: string) => void;
  updateQuantity: (productId: string, variantId: string, qty: number) => void;
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "dripd_cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false });

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const items = JSON.parse(saved) as CartItem[];
        dispatch({ type: "HYDRATE", items });
      }
    } catch {}
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch {}
  }, [state.items]);

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = state.items.reduce((sum, i) => sum + i.variant.price * i.quantity, 0);

  const addItem = (product: Product, variant: ProductVariant) => {
    dispatch({ type: "ADD_ITEM", product, variant });
    dispatch({ type: "OPEN_CART" });
  };

  const removeItem = (productId: string, variantId: string) => {
    dispatch({ type: "REMOVE_ITEM", productId, variantId });
  };

  const updateQuantity = (productId: string, variantId: string, qty: number) => {
    dispatch({ type: "UPDATE_QUANTITY", productId, variantId, quantity: qty });
  };

  return (
    <CartContext.Provider
      value={{ state, dispatch, totalItems, totalPrice, addItem, removeItem, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
