import { PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "../constants/productConstants";

function productListReducer(state= {products:[]}, action) {

    switch (action.type) {
        case PRODUCT_REQUEST:
            return {loading: true} // loading box
        case PRODUCT_SUCCESS:
            return {loading: false, products: action.payload}
        case PRODUCT_FAIL:
            return { loading:false, error: action.payload}
        default:
            return state;
    }
}

export { productListReducer }