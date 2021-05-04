import Customer from "../models/Customer";
import ProductCategory from "../models/ProductCategory";
import Supplier from "../models/Supplier";
import * as actionTypes from "../reducers/utilsTypes";

const INITIAL_STATE: UtilsState = {
  suppliers: [],
  categories: [],
};

export interface UtilsState {
  suppliers: Supplier[];
  categories: ProductCategory[];
}

interface UtilsACtion {
  type: string;
  payload: any;
}

const utilsReducer = (state = INITIAL_STATE, action: UtilsACtion) => {
  switch (action.type) {
    case actionTypes.FETCH_SUPPLIERS_REQUEST:
      return {
        ...state,
      };
    case actionTypes.FETCH_SUPPLIERS_SUCCESS:
      return {
        ...state,
        suppliers: action.payload,
      };
    case actionTypes.FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
      };
    case actionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};
export default utilsReducer;
