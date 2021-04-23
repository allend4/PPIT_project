import { PRODUCT_FAIL, PRODUCT_FAIL_DET, PRODUCT_REQUEST, PRODUCT_REQUEST_DET, PRODUCT_SAVE_REQUEST,
    PRODUCT_SAVE_SUCCESS, PRODUCT_SAVE_FAIL,  PRODUCT_SUCCESS, PRODUCT_SUCCESS_DET, PRODUCT_REQUEST_DELETE,
    PRODUCT_SUCCESS_DELETE, PRODUCT_FAIL_DELETE } from "../constants/productConstants";

function productListReducer(state = {products: [] }, action) {

    switch (action.type) {
        case PRODUCT_REQUEST:
            return { loading: true, products: [] };// loading box
        case PRODUCT_SUCCESS:
            return { loading: false, products: action.payload}
        case PRODUCT_FAIL:
            return { loading:false, error: action.payload}
        default:
            return state;
    }
}

function productDetailsReducer(state=  {product: {} }, action) {

    switch (action.type) {
        case PRODUCT_REQUEST_DET:
            return {loading: true}; // loading box
        case PRODUCT_SUCCESS_DET:
            return {loading: false, product: action.payload};
        case PRODUCT_FAIL_DET:
            return { loading: false, error: action.payload}
        default:
            return state;
    }
}

function productDeleteReducer(state =  { product: {} }, action) {

    switch (action.type) {
        case PRODUCT_REQUEST_DELETE:
            return {loading: true}; // loading box
        case PRODUCT_SUCCESS_DELETE:
            return {loading: false, product: action.payload, success: true };
        case PRODUCT_FAIL_DELETE:
            return { loading: false, error: action.payload}
        default:
            return state;
    }
}

function productSaveReducer(state =  { product: {} }, action) {

    switch (action.type) {
        case PRODUCT_SAVE_REQUEST:
            return { loading: true }; // loading box
        case PRODUCT_SAVE_SUCCESS:
            return { loading: false, success: true, product: action.payload };
        case PRODUCT_SAVE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export { productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer }