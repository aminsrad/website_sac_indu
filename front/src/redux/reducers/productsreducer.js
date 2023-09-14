import { GET_PRODUCT, CREATE_PRODUCT } from "../actions/types";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    case CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};
export default productReducer;
