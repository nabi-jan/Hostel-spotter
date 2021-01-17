import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  CREATE_OWNER,
  LOGIN,
  LOGOUT,
  RESPONSE_ERROR,
  CREATE_USER,
} from "./types";
export const createOwner = (submitData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/register/hostelowner",
      submitData
    );
    dispatch({
      type: CREATE_OWNER,
      payload: response,
    });
  } catch (ex) {
    if (ex.response && ex.response.status === 400) {
      dispatch({
        type: RESPONSE_ERROR,
        payload: ex.response.data,
      });
    }
  }
};
export const createUser = (submitData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/register/user",
      submitData
    );
    dispatch({
      type: CREATE_USER,
      payload: response,
    });
  } catch (ex) {
    if (ex.response && ex.response.status === 400) {
      dispatch({
        type: RESPONSE_ERROR,
        payload: ex.response.data,
      });
    }
  }
};
export const login = (submitData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/users/login",
      submitData
    );
    dispatch({
      type: LOGIN,
      payload: response.data,
    });

    localStorage.setItem("token", response.data);
    let result = jwtDecode(response.data);
    if (result.role === "admin" || result.role === "owner") {
      window.location = "/hostel";
    } else {
      window.location = "/";
    }
  } catch (ex) {
    if (ex.response && ex.response.status === 400) {
      dispatch({
        type: RESPONSE_ERROR,
        payload: ex.response.data,
      });
    }
  }
};
export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  localStorage.removeItem("token");
};
