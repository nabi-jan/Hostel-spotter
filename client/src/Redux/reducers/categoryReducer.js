import {
  FETCH_CATEGORY,
  ADD_CATEGORY,
  DELETE_CATEGORY,
} from "../actions/types";
const initialState = {
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    // case ADD_CATEGORY:
    //   return {
    //     ...state,
    //     data: action.payload,
    //   };
    case FETCH_CATEGORY:
      return {
        ...state,
        data: action.payload,
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
}
