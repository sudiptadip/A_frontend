import axios from "axios"
import { CREATE_ACCOUNT_FAILURE, CREATE_ACCOUNT_REQUEST, CREATE_ACCOUNT_SUCCESS, CREATE_UPDATE_SUCCESS } from "./actionType"


export const createAccount = (data) => dispatch => {
    dispatch({ type:  CREATE_ACCOUNT_REQUEST})
    axios.post("https://filthy-calf-jumper.cyclic.app/users",data)
      .then((response) => {
        dispatch({ type: CREATE_ACCOUNT_SUCCESS, payload: response.data.result})
        console.log(response.data.result)
      }).catch((e) => {
        dispatch({ type:  CREATE_ACCOUNT_FAILURE})
        console.log(e)
      })
  }


  export const updateUserval = (id) => dispatch => {
    dispatch({ type:  CREATE_ACCOUNT_REQUEST})
    axios.patch("https://filthy-calf-jumper.cyclic.app/users/",id)
      .then((response) => {
        // dispatch({ type: CREATE_UPDATE_SUCCESS, payload: response.data})
        console.log(response.data)
      }).catch((e) => {
        dispatch({ type:  CREATE_ACCOUNT_FAILURE})
        console.log(e)
      })
  }