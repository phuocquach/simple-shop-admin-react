const brandUrls = {
    getBrands : () => {
        return "/api/brands";
    },
    getBrand : (id) => {
        return `/api/brands/${id}`;
    },
    editBrand : (id) => {
        return `/api/brands/${id}`;
    },
    deleteBrand : (id) => {
        return `/api/brands/${id}`;
    },
    addBrand : () => {
        return `/api/brands`;
    }
};
export default brandUrls;