import { combineReducers } from "redux";
import products from "./product/productReducer";
import categories from "./category/categoryProducer"
import user from "./user/userProducer";
import orders from './order/orderReducer';
import brands from './brands/brandProducer';
const rootReducer = combineReducers({
    products,
    categories,
    user,
    brands,
    orders
});

export default rootReducer;
