import React,{useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchTodos} from "../../redux/actions/todoAction"
import TodoDetail from "../TodoDetail"
import "./todopage.scss"
import {useSelector} from "react-redux"
import { Pagination } from 'antd';





const TodoPage=()=>{

    const dispatch=useDispatch();
    console.log("i todo page");
      useEffect(()=>{
          dispatch(fetchTodos())
      },[]);

    const todos=useSelector(state=>state?.allTodos?.todos);
    const renderTodos=todos.map((todo)=><TodoDetail todo={todo}/>);
    return(
        <div className={"todolist"}>
            {renderTodos}
           {/* <Pagination
                defaultCurrent={1}
                defaultPageSize={4} //default size of page
                total={3} //total number of card data available
            />*/}
        </div>
    )
};

export default TodoPage;