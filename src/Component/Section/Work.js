import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import "./work.scss";
import Calculate from "../Calculate/Calculate"

export default function Work({lang, fon}){
    return(
        <section id="sectionWork" className={"section3 " + (fon && "active")}>
            <h3>{lang.work}</h3>
            <div className="work">
                <Link to="/" component={<Calculate/>}className="workOne">
                    <div>
                        <div>
                            <span></span>
                        </div>
                    </div>
                </Link>
                <a href = "#" className="workTwo">
                    <div>
                        <div>
                            <span></span>
                        </div>
                    </div>
                </a>
                <a href = "#" className="workThree">
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

