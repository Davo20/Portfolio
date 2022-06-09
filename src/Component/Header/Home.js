import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { MdAlternateEmail } from "react-icons/md"
import {FaLinkedinIn, FaDownload} from "react-icons/fa"
import {BsFillTelephoneFill} from "react-icons/bs"
import "./header.scss"

export default function Home({lang}){
    return(
        <div className="homeContainer">
            <div className="contact">
                <a href="mailto:dav507805@gmail.com" className="linkHref">
                    <MdAlternateEmail/>
                </a>
                <a href="https://www.instagram.com/balabekyan_david/" className="linkHref">
                    <FaLinkedinIn/>
                </a>
                <a href="tel: +374-91-507-805" className="linkHref">
                    <BsFillTelephoneFill/>
                </a>
            </div>
            <div className="downloadRs">
                <a href="">{lang.downBt}</a>
                <FaDownload/>
            </div>
            <div className="myName">
                <h2>{lang.homeName}</h2>
                <div className="download">
                    <a href="#">{lang.downBt}</a>
                    <FaDownload/>
                </div>
            </div>
            <div className="img"></div> 
        </div>
    )
}