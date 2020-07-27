import {
    REQUEST_CATEGORY_START,
    REQUEST_CATEGORY_FINISHED,
    REQUEST_CATEGORY_FAILED
  } from "../../constant";
  
  const initialState = {
    loading: false,
    data: [],
    message: null
  };
  
  const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case REQUEST_CATEGORY_START:
        return {
          ...state,
          loading: true,
          message: "start"
        };
      case REQUEST_CATEGORY_FINISHED:
        return {
          ...state,
          loading: false,
          data: [...action.payload],
          message: "Finish"
        }
      case REQUEST_CATEGORY_FAILED:
        return {
          ...state,
          loading: false,
          message: action.message
        }
      default:
        return {
          ...state
        }
    }
  };
  
  export default categoryReducer;
  