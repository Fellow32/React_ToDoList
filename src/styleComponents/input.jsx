import React from "react";
import '../styleComponents/input.scss'


const Input = ({type,placeholder,text}) => {
    return (
        <input type ={type} placeholder={placeholder}>
          {text}
        </input>
    )
}


export default Input