import axios from "axios";
import {
  ADD_CATEGORY,
  FETCH_CATEGORY,
  DELETE_CATEGORY,
  RESPONSE_ERROR,
} from "./types";
export const addCaegory = (submitData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/category",
      submitData
    );
    dispatch({
      type: ADD_CATEGORY,
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
export const fetchCategory = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      "http://localhost:4000/api/category/" + id
    );
    dispatch({
      type: FETCH_CATEGORY,
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
export const deleteCategory = (id) => async (dispatch) => {
  try {
    await axios.delete("http://localhost:4000/api/category/" + id);
    dispatch({
      type: DELETE_CATEGORY,
      payload: id,
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
