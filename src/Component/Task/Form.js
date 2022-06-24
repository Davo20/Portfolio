import React from "react";

export default function Form({handleClick}){
    return(
        <div className="formCont">
            <form action="#" onSubmit={handleClick} >
                <input type="text" name="name" placeholder="Name" required></input>
                <input type="text" name="lastname" placeholder="Last Name" required></input>
                <textarea  placeholder="Your About" name="about"></textarea>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}