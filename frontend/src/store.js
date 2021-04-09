import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { productListReducer, productDetailsReducer } from './Reducers/productReducer'
import thunk from 'redux-thunk';
//import { basketReducer } from './Reducers/basketReducer';

const initialState = {};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    //basket: basketReducer
})

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk))); // thunk middleware for redux

export default store;