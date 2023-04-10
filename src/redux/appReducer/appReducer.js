import { ADD_POST, APPUPDATE, DELETEPOST, GET_FAILURE, GET_REQUEST, GET_SUCCESS,} from "./actionType";

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
      }
    case ADD_POST: return {
      ...state,
        isLooding: false,
        data: [payload,...state.data]
    }
    case DELETEPOST : 
    const deletepost = state.data.filter((e) => e._id !== payload);
    return {
      ...state, data: deletepost,
    }
    case APPUPDATE:
      const updatedPost = state.data.map((e) =>
        e._id === payload._id ? payload : e
      );
      return { ...state, data: updatedPost,};
    default:
      return state;
  }
  };
  
  export default appReducer;
  