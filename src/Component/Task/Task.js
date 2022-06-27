import React, {useState, useEffect} from "react";
import Form from "./Form";
import {MdEdit, MdDone, MdClose} from "react-icons/md";
import "./task.scss";


if(!localStorage.getItem("id")){
    localStorage.setItem("id", 1)
}
if(!localStorage.getItem("todo")){
    localStorage.setItem("todo", JSON.stringify([]))
}
if(!localStorage.getItem("done")){
    localStorage.setItem("done", JSON.stringify([]))
}
export default function Task (){
    const [task, setTask] = useState(JSON.parse(localStorage.getItem("todo")))
    const [todo, setTodo] = useState(JSON.parse(localStorage.getItem("done")))
    
    const handleClick = (e)=>{
        e.preventDefault()
       
        const add = Array.from(new FormData(e.target))
        const arr = [
            {
                id: localStorage.getItem("id"),
                name: add[0][1],
                lastName: add[1][1],
                phoneNumber: add[2][1]+add[3][1]
            }
        ]
        localStorage.setItem("id", +localStorage.getItem("id")+1)
        localStorage.setItem("todo", JSON.stringify([...JSON.parse(localStorage.getItem("todo")),...arr]))
        // localStorage.setItem("todo", JSON.stringify([...JSON.parse(localStorage.getItem("todo"))], ...task))
        setTask(JSON.parse(localStorage.getItem("todo")))

    }
 
    const delClick = (e) =>{
            const data = JSON.parse(localStorage.getItem("todo")).filter((elem)=>{
                return e.target.id != elem.id
            })
            localStorage.setItem("todo", JSON.stringify(data))
            setTask(JSON.parse(localStorage.getItem("todo")))
    }
    return(
        <div className="task">
            <Form handleClick={handleClick}/>
            <div className="addCont">
                <div className="done">
                    <h2>First</h2>
                    {task.map((elem)=>{
                        return (
                        <div key={Math.random()} className="userCont">
                            <span>{elem.name}</span>
                            <span>{elem.lastName}</span>
                            <span>{elem.phoneNumber}</span>
                            <span>
                                <MdEdit/>
                                <MdClose onClick={delClick} id={elem.id} className="todo"/>
                            </span>
                        </div>
                        )
                    })}
                </div>
                
            </div>
            
        </div>
    )
}