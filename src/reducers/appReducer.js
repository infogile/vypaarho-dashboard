import {
  GET_ALL_SUPPLIERS,
  GET_ALL_CATEGORY,
  GET_ALL_INVENTORY,
} from "../actions/types";

const initialState = {
  suppliers: [],
  category: [],
  inventory: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_SUPPLIERS:
      return {
        ...state,
        suppliers: action.payload,
      };
    case GET_ALL_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case GET_ALL_INVENTORY:
      return {
        ...state,
        inventory: action.payload,
      };
    default:
      return state;
  }
}
