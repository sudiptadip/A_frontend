import axios from "axios";
import { ADD_POST, APPUPDATE, DELETEPOST, GET_FAILURE, GET_REQUEST, GET_SUCCESS,} from "./actionType";


export const getPosts = () => (dispatch) => {
  dispatch({ type: GET_REQUEST });
  return axios
    .get(`https://courageous-kerchief-pig.cyclic.app/posts`)
    .then((res) => {
      dispatch({ type: GET_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: GET_FAILURE });
    });
};

export const addPost = (data,toast) => (dispatch) => {
  dispatch({ type: GET_REQUEST });
  return axios
    .post(`https://courageous-kerchief-pig.cyclic.app/posts`,data)
    .then((res) => {
      dispatch({ type: ADD_POST, payload: res.data });
      toast({
        position: 'top',
        title: 'Successfuly added your post',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    })
    .catch((err) => {
      dispatch({ type: GET_FAILURE });
      toast({
        position: 'top',
        title: 'Post not uploaded',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    });
};

export const likePost = (id) => (dispatch) => {
  console.log('hi')
  return axios
    .patch(`https://courageous-kerchief-pig.cyclic.app/posts/${id}/like`)
    .then((res) => {
      dispatch({ type: APPUPDATE, payload: res.data });
      console.log(res.data)
    })
    .catch((err) => {
      dispatch({ type: GET_FAILURE });
      console.log(err)
    });
};


 export const postUpdate = (data,id) => dispatch => {
    axios.patch("https://courageous-kerchief-pig.cyclic.app/posts/"+id,data)
      .then((response) => {
        dispatch({ type: APPUPDATE, payload: response.data})
      }).catch((e) => {
        console.log(e)
      })
  }

  export const deletePost = (id) => dispatch => {
    axios.delete("https://courageous-kerchief-pig.cyclic.app/posts/"+id)
      .then((response) => {
        dispatch({ type: DELETEPOST, payload: id})
        console.log(response)
      }).catch((e) => {
        console.log(e)
      })
  }