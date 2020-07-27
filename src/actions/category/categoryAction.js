import axios from "axios";
import {
  REQUEST_CATEGORY_START,
  REQUEST_CATEGORY_FINISHED,
  REQUEST_CATEGORY_FAILED,
  ADD_CATEGORY_START,
  ADD_CATEGORY_FAILED,
  ADD_CATEGORY_FINISHED
} from "../../constant";
import UrlGetter from "../../helpers/urlGetter";

const requestaction = () => {
  return {
    type: REQUEST_CATEGORY_START
  }
};

const requestSuccessAction = (data) => {
  return {
    type: REQUEST_CATEGORY_FINISHED,
    payload: data
  }
}

const requestFailedAction = () => {
  return {
    type: REQUEST_CATEGORY_FAILED,
    message: "Loading data error!"
  }
}
const addAction = () => {
  return {
    type: ADD_CATEGORY_START
  }
};

const addSuccessAction = (data) => {
  return {
    type: ADD_CATEGORY_FINISHED,
    payload: data
  }
};

const addFailedAction = () => {
  return {
    type: ADD_CATEGORY_FAILED,
    message: "Loading data error!"
  }
};
export default {
   getCategories : () => {
    return async (dispatch) => {
      try {
        dispatch(requestaction());
        const postData = await axios.get(UrlGetter.getCategories());
        dispatch(requestSuccessAction(postData.data));
      }
      catch (err) {
        dispatch(requestFailedAction())
      }
    };
  },
  addCategory : (payload) => {
    return async (dispatch) => {
      try {
        dispatch(addAction());
        const postData = await axios.post(UrlGetter.addCategory(), payload );
        dispatch(addSuccessAction(postData.data));
      }
      catch (err) {
        dispatch(addFailedAction())
      }
    };
  },
  updateCategory : (payload) => {
    return async (dispatch) => {
      try {
        dispatch(requestaction());
        const postData = await axios.put(UrlGetter.editCategory(payload.id), payload );
        dispatch(requestSuccessAction(postData.data));
      }
      catch (err) {
        dispatch(requestFailedAction())
      }
    };
  },

  deleteCategory : (payload) => {
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


