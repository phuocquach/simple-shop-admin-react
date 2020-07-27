import axios from "axios";
import {
  REQUEST_BRAND_START,
  REQUEST_BRAND_FINISHED,
  REQUEST_BRAND_FAILED,
  ADD_BRAND_FAILED,
  ADD_BRAND_START,
  ADD_BRAND_FINISHED,
  DELETE_BRAND_FAILED,
  DELETE_BRAND_FINISHED,
  DELETE_BRAND_START,
  UPDATE_BRAND_FAILED,
  UPDATE_BRAND_FINISHED,
  UPDATE_BRAND_START
} from "../../constant";
import UrlGetter from "../../helpers/urlGetter";

const requestaction = () => {
  return {
    type: REQUEST_BRAND_START
  }
};

const requestSuccessAction = (data) => {
  return {
    type: REQUEST_BRAND_FINISHED,
    payload: data
  }
}

const requestFailedAction = () => {
  return {
    type: REQUEST_BRAND_FAILED,
    message: "Loading data error!"
  }
}
const addAction = () =>{
    return {
        type: ADD_BRAND_START
    }
}
const addFailedAction = () => {
    return {
        type: ADD_BRAND_FAILED,
        message: "Loading data error!"
    }
}
const addSuccessAction = (data) => {
    return {
        type: ADD_BRAND_FINISHED,
        payload: data
    }
}

export default {
   getBrands : () => {
    return async (dispatch) => {
      try {
        dispatch(requestaction());
        const result = await axios.get(UrlGetter.getBrands());
        dispatch(requestSuccessAction(result.data));
      }
      catch (err) {
        dispatch(requestFailedAction())
      }
    };
  },
  addBrand : (payload) => {
    return async (dispatch) => {
      try {
        dispatch(requestaction());
        const postData = await axios.post(UrlGetter.addBrand(), payload );
        dispatch(requestSuccessAction(postData.data));
      }
      catch (err) {
        dispatch(requestFailedAction())
      }
    };
  },
  updateBrands : (payload) => {
    return async (dispatch) => {
      try {
        dispatch(requestaction());
        const postData = await axios.put(UrlGetter.editBrand(payload.id), payload );
        dispatch(requestSuccessAction(postData.data));
      }
      catch (err) {
        dispatch(requestFailedAction())
      }
    };
  },

  deleteBrand : (payload) => {
    return async (dispatch) => {
      try {
        dispatch(requestaction());
        const postData = await axios.delete(UrlGetter.deleteCategory(payload.id), payload );
        dispatch(requestSuccessAction(postData.data));
      }
      catch (err) {
        dispatch(requestFailedAction())
      }
    };
  }
}


