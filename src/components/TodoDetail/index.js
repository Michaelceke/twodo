import React from "react"
import "./todo-detail.scss"
import { Tag } from 'antd';
import { Button } from 'antd';

const  TodoDetail=({todo})=>{
    const{title, completed}=todo;
    return(
        <div className={"todo-detail"}  >
            <span className={"title"}>Todo Title:</span>
            <div className={"todo-content"}>
                <div className={"todo-text"}>{title}</div>
                <div>  <Tag color={(completed)?"orange":"red"}>{(completed)?"Completed":"Pending"}</Tag>
                    <Button type="primary" size={"small"} shape={"round"} ghost style={{margin:"2px"}}>
                        Edit
                    </Button>
                    <Button type="primary" size={"small"} shape={"round"} ghost>
                        Delete
                    </Button>
                </div>

            </div>
        </div>
    )
};


export default TodoDetail