import axios from "axios";
import { PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS, PRODUCT_REQUEST_DET, PRODUCT_SUCCESS_DET, PRODUCT_FAIL_DET, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS, PRODUCT_SAVE_FAIL, } from "../constants/productConstants"


const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_REQUEST });
        const { data } = await axios.get("/api/products");
        dispatch({ type: PRODUCT_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({ type: PRODUCT_FAIL, payload: error });
    }
}

const saveProduct = (product) => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });
        const { userSignin: { userInfo } } = getState();
         const {data} = await axios.post('/api/products', product, {
            headers: {
                'Authorization': 'Bearer' + userInfo.token
            }
        });
        dispatch({ type:PRODUCT_SAVE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type:PRODUCT_SAVE_FAIL, payload: error.message });

    }
}

const detailsProduct = (productId) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_REQUEST_DET, payload: productId })
        const { data } = await axios.get("/api/products/" + productId);
        dispatch({ type: PRODUCT_SUCCESS_DET, payload: data });
    }
    catch (error) {
        dispatch({ type: PRODUCT_FAIL_DET, payload: error.message });
    }
}

export { listProducts, detailsProduct, saveProduct }