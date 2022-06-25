import React, {useEffect} from "react";
import { BrowserRouter as Link } from "react-router-dom";
// import Calculate from "../Calculate/Calculate";
import "./work.scss";

export default function Work({lang, fon}){
    return(
      
        <section id="sectionWork" className={"section3 " + (fon && "active")}>
            <h3 data-aos="zoom-in-down">{lang.work}</h3>
            <div className="work">
                <a href="#" data-aos="fade-down" data-aos-offset="100" data-aos-duration="800" className="workOne">
                    <div>
                        <div>
                            <span></span>
                        </div>
                    </div>
                </a>
                <a href = "#" data-aos="fade-down" data-aos-offset="150" data-aos-duration="800" className="workTwo">
                    <div>
                        <div>
                            <span></span>
                        </div>
                    </div>
                </a>
                <a href = "#" data-aos="fade-down" data-aos-offset="200" data-aos-duration="800" className="workThree">
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

