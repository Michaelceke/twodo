import {ActionType} from "../constants/action-type"
import axios from "axios"
import {setTodos} from "../actions/todoAction"

const {SET_TODOS_, FETCH_TODOS}=ActionType;


export const todosFetchMiddleware=(store)=>(next )=>(action)=>{
    const {dispatch}=store;
    console.log("dispatching action from middleware", action);
    if (action.type===FETCH_TODOS){
        console.log("presently in the if statement");
        axios.get("https://jsonplaceholder.typicode.com/todos").then((response)=>{
            const todos=response.data;
            dispatch(setTodos(todos));
        }).catch((err)=>console.log("Error", err))

    }
    next(action)
};
