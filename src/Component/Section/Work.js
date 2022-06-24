import React, {useEffect} from "react";
import { BrowserRouter as Link } from "react-router-dom";
import "./work.scss";
import Calculate from "../Calculate/Calculate";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Work({lang, fon}){
    useEffect(()=>{
        Aos.init()
    },[])
    return(
      
        <section id="sectionWork" className={"section3 " + (fon && "active")}>
            <h3 data-aos="zoom-out-down" data-aos-offset="100">{lang.work}</h3>
            <div className="work">
                <a href="#" data-aos="fade-down" data-aos-offset="100" className="workOne">
                    <div>
                        <div>
                            <span></span>
                        </div>
                    </div>
                </a>
                <a href = "#" data-aos="fade-down" data-aos-offset="150" className="workTwo">
                    <div>
                        <div>
                            <span></span>
                        </div>
                    </div>
                </a>
                <a href = "#" data-aos="fade-down" data-aos-offset="200" className="workThree">
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

