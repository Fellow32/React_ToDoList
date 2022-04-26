import React, { useEffect, useState } from "react";
import Input from "../../styleComponents/input";
import style from '../MainPage/MainPage.module.scss'
import ListItem from "./ListItem";
import { useDispatch, useSelector } from "react-redux";
import { addToDoItemAC,addToCompletedItemsAC } from "../../redux/toDoReducer";





const MainPage = () => {

    const name = useSelector(state =>state.toDoInfo.name)

    const activeItems =  useSelector(state => state.toDoInfo.activeItems)
    const completeItems = useSelector(state => state.toDoInfo.completeItems)

    
   

    
    const dispatch = useDispatch()

     
    const [newListItem, setNewListItem] = useState('')

    

 

    const getNewListItem = (event) => {
         
        setNewListItem(event.target.value)
        
       
       
    } 
      
  
    const addNewListItem = () => {
            dispatch(addToDoItemAC(newListItem))
            
          
            
    }
      
    
    
     
       const getValue = async (currentValue) =>{
         
         dispatch(addToCompletedItemsAC(currentValue))
         
       }
    
       
    
      
   
    

    return(
        <div className={style.wrapper}>
            <div className={style.header}>
                <div>

                    
                </div>
                <div className={style.name}> {name}  </div>

                <div className={style.add}>

               
                <div>
                <input onBlur={(event) => event.target.value = ''} onChange={getNewListItem} />
                </div>
               
                <img onClick={addNewListItem} width={50} height={50} src="/img/add.svg" alt="add"/>
               
              
            </div>
            </div>

            <div className={style.content}>  
                    <h2>Активные</h2>



                  <ul >

                  {activeItems.length > 0
                  ? activeItems.map((el) => (
                          
                    <ListItem getValue={getValue} key={el.id} listItem ={el} img ={"/img/noCheck.svg"}/>))
                    
                  : <div className={style.text}> Здесь будет Ваш список дел
                     <div className={style.arrow}></div> </div>
                  
                 

                   }
                  
                 
                  
                 
                     
                      
                    
                  </ul>
            
             </div>

             <div className={style.footer}>

                 <h2>Завершенные</h2>
                 <ul>
                     
                     { completeItems.map((el) => (
                          <ListItem listItem={el} img={"/img/check.svg"} />   
                     ))


                     }
                
                 
                 
                 </ul>
                

             </div>
          

        </div>
    )
}



export default MainPage