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

export const getVariantProduct = (productId) => async(dispatch) => {
    try {
        const response = await axios.get(`https://sistemtoko.com/public/demo/varian/${productId}`);
        dispatch({
            type: 'VARIANT_PRODUCT',
            payload: response.data
        })
    } catch (error) {
        console.log('error when get varian: ', error);
    }
}

export const addToCart = (product, qty) => async(dispatch, getState) => {
    try {
        const state = getState();
        let cartItems = [...state.product.cart];
        const findCartItem = cartItems.find(item => item.product.product_id === product.product_id);
        if(findCartItem) {
            findCartItem.qty = qty
        } else {
            cartItems.push({
                qty,
                product
            })
        }

        dispatch({
            type: 'ADD_TO_CART',
            payload: cartItems
        })
    } catch (error) {
        console.log('error when add to cart: ', error);
    }
}

export const initCart = () => async(dispatch) => {
    try {
        const cart = localStorage.getItem('cart')
        // console.log(cart);
        dispatch({
            type: 'ADD_TO_CART',
            payload: cart? JSON.parse(cart) : []
        })
    } catch (error) {
        console.log(error);
    }
}