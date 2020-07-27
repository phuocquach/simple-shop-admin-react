import axios from "axios";
import {
    REQUEST_PRODUCT_START,
    REQUEST_PRODUCT_FINISHED,
    REQUEST_PRODUCT_FAILED,
    DELETE_PRODUCT_FAILED,
    DELETE_PRODUCT_START,
    DELETE_PRODUCT_FINISHED,
    ADD_PRODUCT_FAILED,
    ADD_PRODUCT_FINISHED,
    ADD_PRODUCT_START,
    UPDATE_PRODUCT_FAILED,
    UPDATE_PRODUCT_START,
    UPDATE_PRODUCT_FINISHED
  } from "../../constant";
import UrlGetter from "../../helpers/urlGetter";
const branid = "B522D926-D9AD-45C8-B2C9-1B8CF53FE4D5";

export const getProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(requestProductAction());
      const postData = await axios.get(UrlGetter.getProducts())
      .catch((res) => {
        
      });
      dispatch(requestSuccessAction(postData.data));
    }
    catch (err) {
      dispatch(requestFailedAction())
    }
  };
}

export const addProduct = (product) => {

  return async (dispatch) => {
    try {
      let formData = new FormData();
      for ( var prop in product ) {
        formData.append(prop, product[prop]);
      }
      dispatch(addProductAction());
      await axios.post(UrlGetter.addProduct(), formData)
      .catch((res) => {
        console.log("Add product error");
      });
      dispatch(addSuccessAction(product));
    }
    catch (err) {
      dispatch(addFailedAction())
    }
  };
}

export const updateProduct = (product) => {
  
  return async (dispatch) => {
    try {
      dispatch(updateProductAction());
      await axios.put(UrlGetter.editProduct(product.id),product)
      .catch((res) => {
        console.log("update product error");
      });
      dispatch(updateSuccessAction(product));
    }
    catch (err) {
      dispatch(updateFailedAction())
    }
  };
}
export const deleteProduct = (product) => {
  
  return async (dispatch) => {
    try {
      dispatch(deleteProductAction());
      await axios.delete(UrlGetter.deleteProduct(product.id),product)
      .catch((res) => {
        console.log("update product error");
      });
      dispatch(deleteSuccessAction(product));
    }
    catch (err) {
      dispatch(deleteFailedAction())
    }
  };
}

const requestProductAction = () => {
  return {
    type: REQUEST_PRODUCT_START
  }
};

const requestSuccessAction = (data) => {
  return {
    type: REQUEST_PRODUCT_FINISHED,
    payload: data
  }
};

const requestFailedAction = () => {
  return {
    type: REQUEST_PRODUCT_FAILED,
    message: "Loading data error!"
  }
};
const deleteProductAction = () => {
  return {
    type: DELETE_PRODUCT_START
  }
};

const deleteSuccessAction = (id) => {
  return {
    type: DELETE_PRODUCT_FINISHED,
    id: id
  }
};

const deleteFailedAction = () => {
  return {
    type: DELETE_PRODUCT_FAILED,
    message: "Loading data error!"
  }
};
const addProductAction = () => {
  return {
    type: ADD_PRODUCT_START
  }
};

const addSuccessAction = (data) => {
  return {
    type: ADD_PRODUCT_FINISHED,
    payload: data
  }
};

const addFailedAction = () => {
  return {
    type: ADD_PRODUCT_FAILED,
    message: "Loading data error!"
  }
};

const updateProductAction = () => {
  return {
    type: UPDATE_PRODUCT_START
  }
};

const updateSuccessAction = (data) => {
  return {
    type: UPDATE_PRODUCT_FINISHED,
    payload: data
  }
};

const updateFailedAction = () => {
  return {
    type: UPDATE_PRODUCT_FAILED,
    message: "Loading data error!"
  }
};
