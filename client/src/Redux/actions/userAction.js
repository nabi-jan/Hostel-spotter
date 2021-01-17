import axios from "axios";
import { FETCH_HOSTEL_OWNER, FETCH_USER, RESPONSE_ERROR } from "./types";
export const fetchHostelOwners = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "http://localhost:4000/api/users/hostelowner"
    );
    dispatch({
      type: FETCH_HOSTEL_OWNER,
      payload: response.data,
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
export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:4000/api/users/");
    dispatch({
      type: FETCH_USER,
      payload: response.data,
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
