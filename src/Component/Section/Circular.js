import React, {useState, useEffect} from "react";
import "./circular.scss";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Circular(){
    useEffect(()=>{
        Aos.init({duration:200})
    }, [])
    const [radius, setRadius] = useState([{count:95},{count:92},{count:92},{count:65},{count:60}])
    return(
    <div className="headRadius">
        {radius.map((elem)=>{
            return(
                <div data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" className="radius" key={Math.random()}>
                    <div className="htmlSize">{`${elem.count}${"%"}`}</div>
                    <div className="boo">
                        <div className="rotate">
                            <div className="left"></div>
                        </div>
                        <div className="rotater">
                            <div className="right"></div>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
    )
}