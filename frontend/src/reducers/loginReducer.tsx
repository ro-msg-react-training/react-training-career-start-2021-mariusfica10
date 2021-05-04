import Customer from "../models/Customer";
import * as actionTypes from "../reducers/loginTypes";

export interface LoginState {
  customer: Customer;
}

interface LoginAction {
  type: string;
  payload: any;
}

const customerDefault: Customer = {
  customerID: 0,
  firstname: "",
  lastname: "",
  username: "",
  password: "",
  email: "",
};

const INITIAL_STATE: LoginState = {
  customer: customerDefault,
};

const loginReducer = (state = INITIAL_STATE, action: LoginAction) => {
  switch (action.type) {
    case actionTypes.FETCH_CUSTOMER_REQUEST:
      return {
        ...state,
      };

    case actionTypes.FETCH_CUSTOMER_SUCCESS:
      return {
        ...state,
        customer: action.payload,
      };

    default:
      return state;
  }
};

export default loginReducer;
