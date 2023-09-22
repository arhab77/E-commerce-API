import axios from "axios";

export const getProduct = (categoryId) => async(dispatch) => {
    try {
        let url = 'https://sistemtoko.com/public/demo/product'

        if(categoryId) {
            url += `?categories=${categoryId.id}`
        }
        
        const response = await axios.get(url);
        dispatch({
            type: 'GET_PRODUCT',
            payload: response.data.aaData
        })
    } catch (error) {
        console.log('error when get product: ', error);
    }
}

export const getCategories = () => async(dispatch) => {
    try {
        const response = await axios.get('https://sistemtoko.com/public/demo/cat');
        dispatch({
            type: 'GET_CATEGORIES',
            payload: response.data.aaData
        })
    } catch (error) {
        console.log('error when get categories: ', error);
    }
}

export const selectedCategory = (categoryId, categoryName) => async(dispatch) => {
    try {
        dispatch({
            type: 'SELECTED_CATEGORIES',
            payload: {
                id: categoryId,
                name: categoryName
            }
        })
    } catch (error) {
        console.log('error selected category: ', error);
    }
}

export const initSearch = (searchKeyword) => (dispatch) => {
    dispatch({
        type: 'INIT_SEARCH',
        payload: searchKeyword
    })
}

export const searchProduct = (searchKeyword) => async(dispatch) => {
    try {
        const response = await axios.get(`https://sistemtoko.com/public/demo/product?search_name=${searchKeyword}`);
        dispatch({
            type: 'SEARCH_PRODUCT',
            payload: response.data.aaData
        })
    } catch (error) {
        console.log('error when search product: ',error);
    }
}

export const productDetails = (productId) => async(dispatch) => {
    try {
        const response = await axios.get(`https://sistemtoko.com/public/demo/single/${productId}`);
        dispatch({
            type: 'DETAIL_PRODUCT',
            payload: response.data
        })
    } catch (error) {
        console.log('error get product detail: ', error);
    }
}

export const getVariantProduct = (productId => async(dispatch) => {
    try {
        const response = await axios.get(`https://sistemtoko.com/public/demo/varian/${productId}`);
        dispatch({
            type: 'VARIANT_PRODUCT',
            payload: response.data
        })
    } catch (error) {
        console.log('error when get varian: ', error);
    }
})