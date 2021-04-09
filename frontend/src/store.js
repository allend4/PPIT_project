import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { productListReducer } from './Reducers/productReducer'
import thunk from 'redux-thunk';

const initialState = {};
const reducer = combineReducers({
    productList: productListReducer,
})

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, compose(applyMiddleware(thunk))); // thunk middleware for redux

export default store;