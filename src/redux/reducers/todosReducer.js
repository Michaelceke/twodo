import {ActionType} from "../constants/action-type"

const {FETCH_TODOS,
    SELECTED_TODO,
    SET_TODOS,
    DELETE_TODO,
    DELETE_ALL_TODOS
}=ActionType;

const initialState={
     todos:[]
};

export const todosReducer=(state=initialState, action)=>{
    switch (action.type){
        case SET_TODOS:
            return {...state, todos:action.payload};
        default:
            return state;
    }
};

