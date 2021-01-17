import {
  CREATE_OWNER,
  CREATE_USER,
  LOGIN,
  LOGOUT,
  RESPONSE_ERROR,
} from "../actions/types";
import jwtDecode from "jwt-decode";
const initialState = {
  isLogged: false,
  data: {},
  errors: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_OWNER:
      return {
        ...state,
        isLogged: true,
        data: action.payload.data,
        accessToken: action.payload.headers["x-auth-token"],
      };
    case CREATE_USER:
      return {
        ...state,
        isLogged: true,
        data: action.payload.data,
        accessToken: action.payload.headers["x-auth-token"],
      };
    case LOGIN:
      return {
        ...state,
        isLogged: true,
        data: jwtDecode(action.payload),
        token: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        data: {},
      };

    case RESPONSE_ERROR:
      return {
        ...state,
        isLogged: false,
        errors: action.payload,
      };

    default:
      return state;
  }
}
