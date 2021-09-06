import {createStore,applyMiddleware, compose} from "redux"
import allReducers from "./reducers"
import {todosFetchMiddleware} from "./middleware"

const composer=compose( applyMiddleware(todosFetchMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const store=createStore(allReducers,{},composer);

export default store;