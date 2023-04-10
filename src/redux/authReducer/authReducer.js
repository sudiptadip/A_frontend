import {
  CREATE_ACCOUNT_FAILURE,
  CREATE_ACCOUNT_REQUEST,
  CREATE_ACCOUNT_SUCCESS,
  LOGOUT,
} from "./actionType";

const initialData = {
  user: JSON.parse(localStorage.getItem("user")) || false,
  isLoading: false,
  isUser: false,
};

const authReducer = (state = initialData, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_ACCOUNT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_ACCOUNT_SUCCESS:
      localStorage.setItem("user", JSON.stringify(payload));
      return {
        ...state,
        isLoading: false,
        isUser: true,
        user: payload,
      };
    case CREATE_ACCOUNT_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        user: false,
        isLoading: false,
        isUser: false,
      };
    default:
      return state;
  }
};

export default authReducer;
