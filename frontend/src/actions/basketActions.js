import axios from "axios";
import Cookie from "js-cookie";
import { BASKET_ADD_ITEM, BASKET_PAYMENT_SAVE, BASKET_REMOVE_ITEM, BASKET_SHIPPING_SAVE } from "../constants/basketConstants";

const addTobasket = (productId, qty) => async (dispatch, getState) => {

    try {
        const { data } = await axios.get("/api/products/" + productId);
        dispatch({
            type: BASKET_ADD_ITEM, payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                inStockCounter: data.inStockCounter,
                qty
            }
        });
        const { basket: { basketItems } } = getState();
        Cookie.set("basketItems", JSON.stringify(basketItems));

    } catch (error) {
        // error
    }

}

const removeFrombasket = (productId) => (dispatch, getState) => {
    dispatch({ type: BASKET_REMOVE_ITEM, payload: productId });

    const { basket: { basketItems } } = getState();
    Cookie.set("basketItems", JSON.stringify(basketItems));
}

const saveShipping = (data) => (dispatch) => {
    dispatch({ type: BASKET_SHIPPING_SAVE, payload: data });
}

const savePayment = (data) => (dispatch) => {
    dispatch({ type: BASKET_PAYMENT_SAVE, payload: data });
}

export { addTobasket, removeFrombasket, saveShipping, savePayment }
