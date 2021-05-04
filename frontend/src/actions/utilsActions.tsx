import axios from "axios";
import Customer from "../models/Customer";
import * as actionTypes from "../reducers/utilsTypes";

/*
const API_URL = "http://localhost:8080/customers/";

export const register = (customer: Customer) => {
  return axios.post(API_URL + "save/", customer);
};

export const login = (customer: Customer) => {
  return axios.get(API_URL + customer.customerID);
};

export const logout = () => {};
*/

export const fetchCategoriesRequest = () => {
  return {
    type: actionTypes.FETCH_CATEGORIES_REQUEST,
  };
};

export const fetchCategoriesSuccess = (categories: any) => {
  return {
    type: actionTypes.FETCH_CATEGORIES_SUCCESS,
    payload: categories,
  };
};

export const fetchCategories = () => {
  return (dispatch: any) => {
    dispatch(fetchCategoriesRequest);
    axios.get("http://localhost:8080/productCategories").then((response) => {
      const categories = response.data;
      dispatch(fetchCategoriesSuccess(categories));
    });
  };
};

export const fetchSuppliersRequest = () => {
  return {
    type: actionTypes.FETCH_SUPPLIERS_REQUEST,
  };
};

export const fetchSuppliersSuccess = (suppliers: any) => {
  return {
    type: actionTypes.FETCH_SUPPLIERS_SUCCESS,
    payload: suppliers,
  };
};

export const fetchSuppliers = () => {
  return (dispatch: any) => {
    dispatch(fetchSuppliersRequest);
    axios.get("http://localhost:8080/suppliers").then((response) => {
      const suppliers = response.data;
      dispatch(fetchSuppliersSuccess(suppliers));
    });
  };
};
