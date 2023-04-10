import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "./actionType";

const initialData = {
  isLooding: false,
  isError: false,
  data: [],
  };
  
  const appReducer = (state = initialData, action) => {
    const { type, payload } = action;
  switch (type) {
    case GET_REQUEST:
      return {
        ...state,
        isLooding: true,
      };
    case GET_SUCCESS:
      return {
        ...state,
        isLooding: false,
        data: payload,
      };
    case GET_FAILURE:
      return {
        ...state,
        isLooding: false,
        isError: true,
      };
    default:
      return state;
  }
  };
  
  export default appReducer;
  