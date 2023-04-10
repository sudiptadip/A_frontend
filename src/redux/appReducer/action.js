import axios from "axios";
import { ADD_POST, GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "./actionType";


export const getPosts = () => (dispatch) => {
  dispatch({ type: GET_REQUEST });
  return axios
    .get(`https://filthy-calf-jumper.cyclic.app/posts`)
    .then((res) => {
      dispatch({ type: GET_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: GET_FAILURE });
    });
};

export const addPost = (data) => (dispatch) => {
  dispatch({ type: GET_REQUEST });
  return axios
    .post(`https://filthy-calf-jumper.cyclic.app/posts`,data)
    .then((res) => {
      dispatch({ type: ADD_POST, payload: res.data });
      console.log(res.data)
    })
    .catch((err) => {
      dispatch({ type: GET_FAILURE });
    });
};