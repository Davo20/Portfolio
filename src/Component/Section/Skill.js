import React, { useState } from "react";
import Circular from "./Circular";
import {AiFillHtml5} from "react-icons/ai";
import {FaCss3, FaSass, FaReact} from "react-icons/fa";
import {DiJavascript1} from "react-icons/di"
import "./skill.scss";

export default function Skill({lang, fon}){
    const [value, setValue] = useState([
        {
            className: "html",
            icon: <AiFillHtml5/>,
            name: "HTML"
        },
        {
            className: "css",
            icon: <FaCss3/>,
            name: "CSS"
        },
        {
            className: "sass",
            icon: <FaSass/>,
            name: "SASS"
        },
        {
            className: "js",
            icon: <DiJavascript1/>,
            name: "JavaScript"
        },
        {
            className: "react",
            icon: <FaReact/>,
            name: "React"
        }
    ])
    
    return(
        <section id="sectionSkill" className={"section2 " + (fon && "active")}>
            <h3>{lang.skills}</h3>
            <div className="skill">
                <div className="frontSkill">
                    <div>{value.map((elem)=>{
                        return <div className={elem.className} key={Math.random()}>
                            <div className="skillIcon">{elem.icon}</div>
                            <div className="skillName">
                                <span>{elem.name}</span>
                            </div>
                        </div>
                    })}</div>
                    <Circular/>
                </div>
            </div>
        </section>
    )
}