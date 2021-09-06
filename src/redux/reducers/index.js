import {combineReducers} from "redux"
import {todosReducer} from "./todosReducer";

const allReducers=combineReducers({
    allTodos :todosReducer,
});


export default allReducers;