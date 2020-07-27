import axios from "axios";
import {
  REQUEST_ORDER_START,
  REQUEST_ORDER_FAILED,
  REQUEST_ORDER_FINISHED
} from "../../constant";
import UrlGetter from "../../helpers/urlGetter";

export const getOrders = () => {
  return async (dispatch) => {
    try {
      dispatch(requestaction());
      const postData = await axios.get(UrlGetter.getOrders());
      dispatch(requestSuccessAction(postData.data));
    }
    catch (err) {
      dispatch(requestFailedAction())
    }
  };
};

export const updateOrder = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(requestaction());
      const postData = await axios.put(UrlGetter.editOrder(payload.id), payload );
      dispatch(requestSuccessAction(postData.data));
    }
    catch (err) {
      dispatch(requestFailedAction())
    }
  };
};

const requestaction = () => {
  return {
    type: REQUEST_ORDER_START
  }
};

const requestSuccessAction = (data) => {
  return {
    type: REQUEST_ORDER_FINISHED,
    payload: data
  }
};

const requestFailedAction = () => {
  return {
    type: REQUEST_ORDER_FAILED,
    message: "Loading data error!"
  }
};
