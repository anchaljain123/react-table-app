
import { createStore ,applyMiddleware, combineReducers, compose } from 'redux'
import { rowReducer } from './reducers'
import { middleware } from  './middlewares'

const Middleware = applyMiddleware(...middleware);
const store = createStore(combineReducers({
    rowReducer,
}), compose(Middleware));

export default store;