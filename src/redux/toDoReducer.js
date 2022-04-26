const ADD_NAME = 'ADD_NAME'
const ADD_TO_DO_ITEM = 'ADD_TO_DO_ITEM'
const ADD_TO_COMPLETED_ITEMS = 'ADD_TO_COMPLETED_ITEMS'

const initialState ={
    name:'User',
    activeItems : ['Сходить на тренировку','Купить молоко'],
    completeItems: ['Сходить в магазин']
    

}








const toDoReducer = (state = initialState, action) => {
                        
       switch(action.type) {
         case ADD_NAME:
            return {...state,name:action.payload} 
            
         case  ADD_TO_DO_ITEM:
           return {...state,activeItems:[...state.activeItems,action.payload]}  


           case ADD_TO_COMPLETED_ITEMS:
                           
                 
                  
             return{
               ...state,
                 activeItems:[...state.activeItems.filter((el) => el !== action.payload)],
                 completeItems:[...state.completeItems,action.payload]
                    }
              

          

           
           

       }

      return state
}






export const addNameAC = (payload) => ({
           type : ADD_NAME,
           payload
})

export const addToDoItemAC = (payload) => ({
  type : ADD_TO_DO_ITEM,
  payload
})

export const addToCompletedItemsAC = (payload) => ({
  type : ADD_TO_COMPLETED_ITEMS,
  payload
})




export default toDoReducer