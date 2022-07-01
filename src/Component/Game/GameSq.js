import React, { useState} from "react";

export default function GameSq({gameClick, squareState, one, two}){
    const [sq, setSq] = useState("")
    const handleClick = ()=>{
        if(sq == ""){
            setSq(squareState)
            gameClick(one, two)
        }
    }
    return(
        <div onClick={handleClick}>{sq}</div>
    )
}