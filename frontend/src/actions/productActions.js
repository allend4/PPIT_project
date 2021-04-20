import axios from "axios";
import Axios from "axios";
import { PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS, PRODUCT_REQUEST_DET, PRODUCT_SUCCESS_DET,
    PRODUCT_FAIL_DET, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS, PRODUCT_SAVE_FAIL, PRODUCT_REQUEST_DELETE,
    PRODUCT_SUCCESS_DELETE, PRODUCT_FAIL_DELETE, } from "../constants/productConstants"


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
        const { userSignin: { userInfo },
     } = getState();
        if(!product._id){
             const { data } = await Axios.post('/api/products', product, {
            headers: {
                'Authorization': 'Bearer' + userInfo.token,
            },
        });
        dispatch({ type:PRODUCT_SAVE_SUCCESS, payload: data });
        } else {
            const { data } = await Axios.put('/api/products/' + product._id, product, {
                headers: {
                    'Authorization': 'Bearer' + userInfo.token,
                },
            });
            dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
        }
        
    } catch (error) {
        dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message });

    }
};

const detailsProduct = (productId) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_REQUEST_DET, payload: productId });
        const { data } = await axios.get("/api/products/" + productId);
        dispatch({ type: PRODUCT_SUCCESS_DET, payload: data });
    } catch (error) {
        dispatch({ type: PRODUCT_FAIL_DET, payload: error.message });
    }
};
const deleteProduct = (productId) => async (dispatch, getState) => {
    try {
        const { userSignin: { userInfo } } = getState();
        dispatch({ type: PRODUCT_REQUEST_DELETE, payload: productId })
        const { data } = await axios.delete("/api/products/" + productId, {
            headers:{
                Authorization: 'Bearer' + userInfo.token
            }
        });
        dispatch({ type: PRODUCT_SUCCESS_DELETE, payload: data, success: true });
    }
    catch (error) {
        dispatch({ type: PRODUCT_FAIL_DELETE, payload: error.message });
    }
}

export { listProducts, detailsProduct, saveProduct, deleteProduct }