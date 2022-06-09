import "./App.css";
import React, {useState} from "react";
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./Component/Header/Header";
import About from "./Component/Section/About";
import Skill from "./Component/Section/Skill";
import Work from "./Component/Section/Work";
import Contact from "./Component/Section/Contact";
import Footer from "./Component/Footer/Footer";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



export default function App() {
  const [open, setOpen] = useState(false)
  const [fon, setFon] = useState(false)
  const [form, setForm] = useState([])
  const [lang, setLang] = useState({
    logo: "DAV",
    burgName: "David",
    burgLastName: " Balabekyan",
    home: "Home",
    about: "About",
    skills: "Skills",
    work: "Work",
    contact: "Contact",
    homeName: "Hello I am David",
    downBt: "Download CV",
    inputName: "Name",
    inputEmail: "e-mail",
    inputMessage: "Message...",
    sendBt: "Send",
    footLevel: "Front-end Developer",
    more: "More",
    lang: true
  })
  const langClick = () =>{
    if(lang.lang){
      setLang({
        logo: "ԴԱՎ",
        burgName: "Դավիթ",
        burgLastName: "Բալաբեկյան",
        home: "Գլխավոր",
        about: "Իմ մասին",
        skills: "Հմտություն",
        work: "Աշխատանք",
        contact: "Կապ",
        homeName: "Ողջույն ես Դավիթն եմ",
        downBt: "Ներբեռնել CV",
        inputName: "Անուն",
        inputEmail: "Էլ․ Հասցե",
        inputMessage: "Հաղորդագրություն...",
        sendBt: "ՈՒղարկել",
        footLevel: "Front-end Ծրագրավորող",
        more: "Ավելին",
        fontSize: "10px",
        lang: false
      })
    }
    else{
      setLang({
        logo: "DAV",
        burgName: "David",
        burgLastName: " Balabekyan",
        home: "Home",
        about: "About",
        skills: "Skills",
        work: "Work",
        contact: "Contact",
        homeName: "Hello I am David",
        downBt: "Download CV",
        inputName: "Name",
        inputEmail: "e-mail",
        inputMessage: "Message...",
        sendBt: "Send",
        footLevel: "Front-end Developer",
        more: "More",
        lang: true
      })
    }
  }
    const dd=(e)=>{
        e.preventDefault();
        const add=Array.from(new FormData(e.target))
        
           const obj = [{
                name: add[0][1],
                email: add[1][1],
                message: add[2][1]
            }]
            setForm(obj)
            
        }
        console.log(form)
  return(
    <main className="main">
      <Header open = {open} setOpen = {setOpen} lang={lang} langClick={langClick} fon={fon} setFon={setFon}/>
      <About lang={lang} fon={fon}/>
      <Skill lang={lang} fon={fon}/>
      <Work lang={lang} fon={fon}/>
      <Contact send={dd} lang={lang} fon={fon}/>
      <Footer lang={lang} langClick={langClick}/>

    </main>
  )
}
