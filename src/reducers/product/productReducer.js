import {
    REQUEST_PRODUCT_START,
    REQUEST_PRODUCT_FINISHED,
    REQUEST_PRODUCT_FAILED,
    ADD_PRODUCT_FAILED,
    ADD_PRODUCT_FINISHED,
    ADD_PRODUCT_START,
    DELETE_PRODUCT_FAILED,
    DELETE_PRODUCT_START,
    DELETE_PRODUCT_FINISHED,
    UPDATE_PRODUCT_FAILED,
    UPDATE_PRODUCT_START,
    UPDATE_PRODUCT_FINISHED
  } from "../../constant";
  
  const initialState = {
    loading: false,
    data: [],
    message: null
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case REQUEST_PRODUCT_START:
        return {
          ...state,
          loading: true,
          message: null
        };
      case REQUEST_PRODUCT_FINISHED:
        return {
          ...state,
          loading: false,
          data: action.payload,
          message: null
        }
      case REQUEST_PRODUCT_FAILED:
        return {
          ...state,
          loading: false,
          message: action.message
        }
      case ADD_PRODUCT_FAILED:
        return{
          ...state,
          loading: false,
          message: action.message
        }
      case ADD_PRODUCT_FINISHED:
        return{
          ...state,
          loading: false,
          data: [...this, action.payload],
          message: null
        }
      case ADD_PRODUCT_START:
        return {
          ...state,
          loading: true,
          message: null
        }
      case DELETE_PRODUCT_FAILED:
        return{
          ...state,
          loading: false,
          message: action.message
        }
      case DELETE_PRODUCT_FINISHED:
        const {remainData} = {...state};
        remainData.splice(remainData.findIndex(x => x.id == action.id),1);
        return{
          loading: false,
          data: remainData,
          message: null
        }
      case DELETE_PRODUCT_START:
        return {
          ...state,
          loading: true,
          message: null
        }
      case UPDATE_PRODUCT_FAILED:
        return{
          ...state,
          loading: false,
          message: action.message
        }
      case UPDATE_PRODUCT_FINISHED:

        const {currentData} = {...state};
        currentData[currentData.findIndex(x => x.id == action.payload.id)] = action.payload;
        return{
          ...state,
          loading: false,
          data: currentData,
          message: null
        }
      case UPDATE_PRODUCT_START:
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
  