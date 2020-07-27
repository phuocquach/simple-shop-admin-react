import {
    REQUEST_BRAND_FAILED,
    REQUEST_BRAND_FINISHED,
    REQUEST_BRAND_START
  } from "../../constant";
  
  const initialState = {
    loading: false,
    data: [],
    message: null
  };
  
  const brandsReducer = (state = initialState, action) => {
    switch (action.type) {
      case REQUEST_BRAND_START:
        return {
          ...state,
          loading: true,
          message: "start"
        };
      case REQUEST_BRAND_FINISHED:
        return {
          ...state,
          loading: false,
          data: [...action.payload],
          message: "Finish"
        }
      case REQUEST_BRAND_FAILED:
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
  
  export default brandsReducer;
  