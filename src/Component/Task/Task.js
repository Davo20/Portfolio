import React, {useState, useEffect} from "react";
import Form from "./Form";
import {MdEdit, MdDone, MdClose} from "react-icons/md";
// import "./task.scss";
export default function Task (){
    const [task, setTask] = useState([])
    const [todo, setTodo] = useState([])
    
    
    const handleClick = (e)=>{
        e.preventDefault()
       
        const add = Array.from(new FormData(e.target))
         setTask([
            {
                id: Math.floor(Math.random()*1000),
                name: add[0][1],
                lastName: add[1][1],
                about: add[2][1]
            }
        ])
    
        // setTodo([...task, ...todo])
        if (!localStorage.getItem("add")) {
            localStorage.setItem("add", JSON.stringify([...task]));
            setTask(JSON.parse(localStorage.getItem("add")))
        }
        // localStorage.setItem("add",JSON.stringify([...task, ...todo]))
    
        // if(localStorage.getItem("add")){
        //     setTodo(JSON.parse(localStorage.getItem("add")))
        //     setTodo()
        // }
     
    }
    // useEffect(()=>{
    // }, [])
    console.log(todo)
    const delClick = () =>{
        localStorage.removeItem("add")
    }
    return(
        <div className="task">
            <Form handleClick={handleClick}/>
            <div className="addCont">
                <div className="done">
                    <h2>First</h2>
                    {todo.map((elem)=>{
                        return (
                        <div key={Math.random()} className="userCont">
                            <span>{elem.name}</span>
                            <span>{elem.lastName}</span>
                            <span>
                                <MdEdit/>
                                <MdDone/>
                                <MdClose onClick={delClick}/>
                            </span>
                        </div>
                        )
                    })}
                </div>
                <div className="three"><h2>Three</h2></div>
            </div>
            
        </div>
    )
}