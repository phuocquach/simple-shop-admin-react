import {
  USER_EXPIRED,
  USER_FOUND,
  SILENT_RENEW_ERROR,
  USER_EXPIRING,
  SESSION_TERMINATED,
  LOADING_USER,
  USER_SIGNED_OUT,
  LOAD_USER_ERROR
} from '../../constant'
  
  const initialState = {
    loading: false,
    data: undefined,
    message: null
  };
  
  const userProducer = (state = initialState, action) => {
    switch (action.type) {
      case LOADING_USER:
        return {
          ...state,
          loading: true,
          message: null
        };
      case USER_FOUND:
        return {
          ...state,
          loading: false,
          data: action.payload,
          message: null
        }
      case LOAD_USER_ERROR:
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
  
  export default userProducer;
  