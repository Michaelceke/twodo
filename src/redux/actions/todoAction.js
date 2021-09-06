import {ActionType} from "../constants/action-type"

const {FETCH_TODOS,
      SELECTED_TODO,
      SET_TODOS,
      DELETE_TODO,
      DELETE_ALL_TODOS
     }=ActionType;

export const fetchTodos=()=>{
    return{
        type:FETCH_TODOS
    }
};

export const selectedTodo=(todo)=>{
    return{
        type:SELECTED_TODO
    }
};
export const setTodos=(todos)=>{
    return{
        type:SET_TODOS,
        payload:todos
    }
};
export const deleteTodo=(todo)=>{
    return{
        type:DELETE_TODO,
        payload:todo
    }
};
export const deleteAllTodos=()=>{
    return{
        type:DELETE_ALL_TODOS
    }
};