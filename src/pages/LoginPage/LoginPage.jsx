import React, {useState } from "react";
import { useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { addNameAC } from "../../redux/toDoReducer";
import style from '../LoginPage/LoginPage.module.scss'

const LoginPage = () => {


      const dispatch = useDispatch()
        
        const[currentName,setCurrentName] = useState('')

        const nameChange = (event) => {
          setCurrentName(event.target.value)
        }

        const addName = () => {
          if(currentName){
            dispatch(addNameAC(currentName))
          }else{
            dispatch(addNameAC("User"))
          }
            
        
        }


    return(

        <div className={style.wrapper}>   
          <h1> To do list </h1>
          <input  type={'text'} onChange={nameChange}  value={currentName} placeholder={"введите имя"}/>
          <Link to ='/main'>
          <div onClick={addName} className={style.continue}> Продолжить </div>
          </Link>



         
        </div>


    )
}


export default LoginPage