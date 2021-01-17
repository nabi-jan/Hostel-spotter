import {
  FETCH_HOSTEL_OWNER,
  FETCH_USER,
  RESPONSE_ERROR,
} from "../actions/types";
const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_HOSTEL_OWNER:
      return {
        ...state,
        data: action.payload,
      };
    case FETCH_USER:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
}
