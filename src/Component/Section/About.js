import React, {useEffect} from "react";
import "./about.scss";
import Aos from "aos";
import "aos/dist/aos.css";


export default function About({lang, fon}){
    useEffect(()=>{
        Aos.init()
        }, [])
    return(
        <section id="section" className={"sectionAbout " + (fon && "active")}>
          
            <h3 data-aos="zoom-in-down" data-aos-offset="100" data-aos-duration="500"  className="aboutName">{lang.about}</h3>
            <div className="about">
                <div data-aos="fade-right" data-aos-offset="100" data-aos-duration="1000" className="aboutImg">
                </div>
                <div data-aos="fade-left" data-aos-offset="95" data-aos-duration="1000" className="aboutText">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae neque ratione sapiente unde quidem! Dolor, blanditiis tempora doloribus sequi beatae quod maxime rerum soluta voluptas cumque doloremque aliquam obcaecati dolores?</p>
                </div>
            </div>
        </section>
    )
}