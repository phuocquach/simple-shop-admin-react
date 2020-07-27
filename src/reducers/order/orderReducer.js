import {
    REQUEST_ORDER_START,
    REQUEST_ORDER_FINISHED,
    REQUEST_ORDER_FAILED,
    UPDATE_ORDER_FAILED,
    UPDATE_ORDER_FINISHED,
    UPDATE_ORDER_START
  } from "../../constant";
  
  const initialState = {
    loading: false,
    data: [],
    message: null
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case REQUEST_ORDER_START:
        return {
          ...state,
          loading: true,
          message: null
        };
      case REQUEST_ORDER_FINISHED:
        return {
          ...state,
          loading: false,
          data: action.payload,
          message: null
        }
      case REQUEST_ORDER_FAILED:
        return {
          ...state,
          loading: false,
          message: action.message
        }
      case UPDATE_ORDER_FAILED:
        return{
          ...state,
          loading: false,
          message: action.message
        }
      case UPDATE_ORDER_FINISHED:
        return{
          ...state,
          loading: false,
          data: action.payload,
          message: null
        }
      case UPDATE_ORDER_START:
        return {
          ...state,
          loading: true,
          message: null
        }
      default:
        return {
          ...state
        }
    }
  };
  
  export default productReducer;
  