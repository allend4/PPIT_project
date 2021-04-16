import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { productListReducer, productDetailsReducer } from './Reducers/productReducer'
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { cartReducer } from './Reducers/cartReducers';
//import { basketReducer } from './Reducers/basketReducer';

const cartItems = Cookie.getJSON("cartItems") || [];

const initialState = { cart: { cartItems } };
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
    //basket: basketReducer
})

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk),
    //Redux chrome extension to developer
    window.devToolsExtension ? window.devToolsExtension() : f => f)); // thunk middleware for redux

export default store;