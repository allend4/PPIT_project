import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer } from './Reducers/productReducer'
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { cartReducer } from './Reducers/cartReducers';
import { userRegisterReducer, userSigninReducer } from './Reducers/userReducers';
//import { basketReducer } from './Reducers/basketReducer';

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = { cart: { cartItems }, userSignin: { userInfo} };
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer

    //basket: basketReducer
})

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk),
    //Redux chrome extension to developer
    window.devToolsExtension ? window.devToolsExtension() : f => f)); // thunk middleware for redux

export default store;