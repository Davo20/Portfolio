import React from "react";
import "./about.scss"

export default function About({lang, fon}){
    return(
        <section id="section" className={"sectionAbout " + (fon && "active")}>
            <h3 className="aboutName">{lang.about}</h3>
            <div className="about">
                <div className="aboutImg">

                </div>
                <div className="aboutText">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae neque ratione sapiente unde quidem! Dolor, blanditiis tempora doloribus sequi beatae quod maxime rerum soluta voluptas cumque doloremque aliquam obcaecati dolores?</p>
                </div>
            </div>
        </section>
    )
}