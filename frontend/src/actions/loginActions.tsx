import axios from "axios";
import * as actionTypes from "../reducers/loginTypes";

export const fetchCustomerRequest = () => {
  return {
    type: actionTypes.FETCH_CUSTOMER_REQUEST,
  };
};

export const fetchCustomerSuccess = (customer: any) => {
  return {
    type: actionTypes.FETCH_CUSTOMER_SUCCESS,
    payload: customer,
  };
};

export const fetchCustomer = (customerID: any) => {
  return (dispatch: any) => {
    dispatch(fetchCustomerRequest);
    axios
      .get("http://localhost:8080/customers/" + customerID)
      .then((response) => {
        const customer = response.data;
        dispatch(fetchCustomerSuccess(customer));
      });
  };
};
