import React, {useState} from "react";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import "./task.scss";

export default function Form({handleClick}){
    const [phoneNumber, setPhoneNumber] = useState()
    
    return(
        <div className="formCont">
            <form action="#" onSubmit={handleClick} >
                <input type="text" name="name" placeholder="Name" required></input>
                <input type="text" name="lastname" placeholder="Last Name" required></input>
                <PhoneInput className="phoneNumber" placeholder="Phone Number" name="phoneNumber"  onChange={setPhoneNumber}></PhoneInput>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}