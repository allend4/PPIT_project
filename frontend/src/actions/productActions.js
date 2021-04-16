import axios from "axios";
import { PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS, PRODUCT_REQUEST_DET, PRODUCT_SUCCESS_DET, PRODUCT_FAIL_DET } from "../constants/productConstants"

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

export { listProducts, detailsProduct }