import React, {useEffect} from "react";
import { BrowserRouter as Link } from "react-router-dom";
import "./work.scss";
// import Calculate from "../Calculate/Calculate";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Work({lang, fon}){
    useEffect(()=>{
        Aos.init()
    },[])
    return(
      
        <section id="sectionWork" className={"section3 " + (fon && "active")}>
            <h3 data-aos="zoom-in-down">{lang.work}</h3>
            <div className="work">
                <a href="#" data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" className="workOne">
                    <div>
                        <div>
                            <span></span>
                        </div>
                    </div>
                </a>
                <a href = "#" data-aos="fade-down" data-aos-offset="150" data-aos-easing="ease-in-sine" className="workTwo">
                    <div>
                        <div>
                            <span></span>
                        </div>
                    </div>
                </a>
                <a href = "#" data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" className="workThree">
                    <div>
                        <div>
                            <span></span>
                        </div>
                    </div>
                </a>
            </div>
        </section>
       
    )
}

