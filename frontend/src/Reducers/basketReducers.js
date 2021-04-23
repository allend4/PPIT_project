import { BASKET_ADD_ITEM, BASKET_PAYMENT_SAVE, BASKET_REMOVE_ITEM, BASKET_SHIPPING_SAVE } from "../constants/basketConstants";

function basketReducer(state = { basketItems: [], shipping: [], payment: [] }, action) {
    switch (action.type) {
        case BASKET_ADD_ITEM:
            const item = action.payload;
            const product = state.basketItems.find(x => x.product === item.product);
            if (product) {
                // update to basketItems
                return {
                    basketItems:
                        state.basketItems.map(x => x.product === product.product ? item : x)
                };
            }
            return { basketItems: [...state.basketItems, item] };
        case BASKET_REMOVE_ITEM:
            return { basketItems: state.basketItems.filter(x => x.product !== action.payload) }
        case BASKET_SHIPPING_SAVE:
            return { ...state, shipping: action.payload };
        case BASKET_PAYMENT_SAVE:
            return { ...state, payment: action.payload };
        default:
            return state
    }
}

export { basketReducer }