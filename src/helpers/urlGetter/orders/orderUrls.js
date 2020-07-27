const orderUrls = {
    getOrders : () => {
        return "/api/orders";
    },
    getOrder : (id) => {
        return `/api/orders/${id}`;
    },
    editOrder : (id) => {
        return `/api/orders/${id}`;
    },
    deleteOrder : (id) => {
        return `/api/orders/${id}`;
    },
    addOrder : () => {
        return `/api/orders`;
    }
};
export default orderUrls;