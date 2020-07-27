const categoryUrls = {
    getCategories : () => {
        return "/api/categories";
    },
    getCategory : (id) => {
        return `/api/categories/${id}`;
    },
    editCategory : (id) => {
        return `/api/categories/${id}`;
    },
    deleteCategory : (id) => {
        return `/api/categories/${id}`;
    },
    addCategory : () => {
        return `/api/categories`;
    }
};

export default categoryUrls;