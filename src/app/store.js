import { applyMiddleware, combineReducers, createStore, compose  } from 'redux';
import thunk from 'redux-thunk';
import productReducer from './reducer/productReducer';

let rootReducer = combineReducers({
    product: productReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;