import { PRODUCT_FAIL, PRODUCT_FAIL_DET, PRODUCT_REQUEST, PRODUCT_REQUEST_DET, PRODUCT_SUCCESS, PRODUCT_SUCCESS_DET } from "../constants/productConstants";

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

function productDetailsReducer(state=  {product: {} }, action) {

    switch (action.type) {
        case PRODUCT_REQUEST_DET:
            return {loading: true} // loading box
        case PRODUCT_SUCCESS_DET:
            return {loading: false, product: action.payload};
        case PRODUCT_FAIL_DET:
            return { loading: false, error: action.payload}
        default:
            return state;
    }
}

export { productListReducer, productDetailsReducer }