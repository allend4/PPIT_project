import axios from "axios";
import { PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "../constants/productConstants"

const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_REQUEST });
        const { data } = await axios.get("/api/products");
        dispatch({ type: PRODUCT_SUCCESS, payload: data })
    }
    catch(error) {
        dispatch({ type: PRODUCT_FAIL, payload: error });
    }
    
}

export { listProducts }