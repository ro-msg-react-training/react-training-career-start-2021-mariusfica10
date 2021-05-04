import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../models/Product";
import * as actionTypes from "../reducers/shoppingTypes";

export const addToCart = (productID: number) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: productID,
    },
  };
};

export const removeFromCart = (productID: number) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: productID,
    },
  };
};

export const changeOrder = (orderID: number) => {
  return {
    type: actionTypes.CHANGE_ITEMS_ID,
    payload: {
      id: orderID,
    },
  };
};

export const adjustQuantity = (productID: number, value: number) => {
  return {
    type: actionTypes.ADJUST_QUANTITY,
    payload: {
      id: productID,
      quantity: value,
    },
  };
};

export const loadCurrentItem = (product: Product) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: product,
  };
};

export const fetchProductsRequest = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductsSuccess = (products: any) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const fetchProducts = () => {
  return (dispatch: any) => {
    dispatch(fetchProductsRequest);
    axios.get("http://localhost:8080/products").then((response) => {
      const products = response.data;
      dispatch(fetchProductsSuccess(products));
    });
  };
};
