const productUrl = {

    getProducts : () => {
        return "/api/products";
    },
    getProduct : (id) => {
        return `/api/products/${id}`;
    },
    addProduct : () => {
        return "/api/products";
    },
    deleteProduct : (id) => {
        return `/api/products/${id}`;
    },
    editProduct : (id) => {
        return `/api/products/${id}`;
    },
    getProductImage: (id) => {
        return `/api/products/${id}/images`;
    }
}
export default productUrl;