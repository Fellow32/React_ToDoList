import React from "react";
import style from '../MainPage/ListItem.module.scss'



const ListItem = ({getValue,img,listItem}) => {


    
    return (
        
            
                
              <div onClick={()=>getValue(listItem)} className={style.items}>
                   <div>

                   <img width={18} height={18}  src={img} alt="check"/>
                   </div>
                 
                
                  <div>{listItem}</div>
                  

                 
              
              </div>
              

         
   

        
         )
         
}

export default ListItem