const initialState = {
    product: [],
    categories: [],
    selectedCategory: null,
    searchKeyword: '',
    searchResults: [],
    variant: [],
    cart: []
}

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_PRODUCT':
            return {
                ...state,
                product: [...action.payload]
            }
        case 'GET_CATEGORIES':
            return {
                ...state,
                categories: [...action.payload]
            }
        case 'SELECTED_CATEGORIES':
            return {
                ...state,
                selectedCategory: action.payload
            }
        case 'INIT_SEARCH':
            return {
                ...state,
                searchKeyword: action.payload
            }
        case 'SEARCH_PRODUCT':
            return {
                ...state,
                searchResults: [...action.payload]
            }
        case 'DETAIL_PRODUCT':
            return {
                ...state,
                product: [action.payload]
            }
        case 'VARIANT_PRODUCT':
            return {
                ...state,
                variant: action.payload
            }
        case 'ADD_TO_CART':
            localStorage.setItem('cart', JSON.stringify(action.payload))
            return {
                ...state,
                cart: [...action.payload]
            }
        default:
            return state;
    }
};

export default productReducer;