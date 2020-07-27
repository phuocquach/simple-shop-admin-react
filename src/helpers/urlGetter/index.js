import orderUrls from './orders/orderUrls';
import categoryUrls from "./categories/categoryUrls";
import productUrls from "./products/productUrls";
import brandUrls from './brands/brandUrls';

const UrlGetter = {
    ...orderUrls,
    ...categoryUrls,
    ...productUrls,
    ...brandUrls
}

export default UrlGetter;