import { GET_ACTUALITE, CREATE_ACTUALITE } from "../actions/types";

const initialState = {
  actualites: [],
};

export const actualiteReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACTUALITE:
      return {
        ...state,
        actualites: action.payload,
      };
    case CREATE_ACTUALITE:
      return {
        ...state,
        actualites: [...state.actualites, action.payload],
      };
    default:
      return state;
  }
};
export default actualiteReducer;
