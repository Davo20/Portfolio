import React, {useState} from "react";
import {MdClose} from "react-icons/md";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import "./task.scss";

export default function Form({handleClick, lang,reqName, reqLName, reqPNumber}){
    const [phoneNumber, setPhoneNumber] = useState()
    
    return(
        <div className="formCont">
            <form action="#" onSubmit={handleClick} >
               <label> <input type="text" name="name" placeholder={lang.taskInputName} ></input>{reqName && <MdClose className="req"/>}</label>
                <input type="text" name="lastname" placeholder={lang.taskLastName} ></input>{reqLName && <MdClose className="req"/>}
                <PhoneInput className="phoneNumber" placeholder={lang.taskPhoneNumber} name="phoneNumber"  onChange={setPhoneNumber}></PhoneInput>{reqPNumber && <MdClose className="req"/>}
                <button type="submit">{lang.taskAdd}</button>
            </form>
        </div>
    )
}