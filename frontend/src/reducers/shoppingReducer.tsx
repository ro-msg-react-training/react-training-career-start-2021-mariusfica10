import axios from "axios";
import { useEffect, useState } from "react";
import CartItem from "../models/CartItem";
import Product from "../models/Product";
import * as actionTypes from "../reducers/shoppingTypes";

const INITIAL_STATE: ShopState = {
  products: [],
  cart: [],
};

export interface ShopState {
  products: Product[];
  cart: CartItem[];
}

interface ShopAction {
  type: string;
  payload: any;
}

const shoppingReducer = (state = INITIAL_STATE, action: ShopAction) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const inCart = state.cart.find((item) =>
        item.productID === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.productID === action.payload.id
                ? {
                    orderID: 0,
                    productID: action.payload.id,
                    quantity: item.quantity + 1,
                  }
                : item
            )
          : [
              ...state.cart,
              { orderID: 0, productID: action.payload.id, quantity: 1 },
            ],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.productID !== action.payload.id),
      };
    case actionTypes.ADJUST_QUANTITY:
      return {};
    case actionTypes.LOAD_CURRENT_ITEM:
      return {};
    case actionTypes.FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
      };
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    case actionTypes.CHANGE_ITEMS_ID:
      return {
        cart: state.cart.map((item, index) => {
          item.orderID = action.payload.id;
        }),
      };
    default:
      return state;
  }
};

export default shoppingReducer;
