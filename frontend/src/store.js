import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer } from './Reducers/productReducer'
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { basketReducer } from './Reducers/basketReducers';
import { userRegisterReducer, userSigninReducer } from './Reducers/userReducers';

const basketItems = Cookie.getJSON('basketItems') || [];
const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = { basket: { basketItems, shipping: {}, payment: {} }, userSignin: { userInfo } };
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    basket: basketReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer
})

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk),
    //Redux chrome extension to developer
    window.devToolsExtension ? window.devToolsExtension() : f => f)); // thunk middleware for redux

export default store;