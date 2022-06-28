import React, {useState} from "react";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import "./task.scss";

export default function Form({handleClick, lang}){
    const [phoneNumber, setPhoneNumber] = useState()
    
    return(
        <div className="formCont">
            <form action="#" onSubmit={handleClick} >
                <input type="text" name="name" placeholder={lang.taskInputName} required></input>
                <input type="text" name="lastname" placeholder={lang.taskLastName} required></input>
                <PhoneInput className="phoneNumber" placeholder={lang.taskPhoneNumber} name="phoneNumber"  onChange={setPhoneNumber}></PhoneInput>
                <button type="submit">{lang.taskAdd}</button>
            </form>
        </div>
    )
}