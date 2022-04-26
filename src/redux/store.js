import {combineReducers, createStore} from 'redux'
import toDoReducer from './toDoReducer'


const rootReducers = combineReducers(
    {
       toDoInfo : toDoReducer
    }
)


const store = createStore(rootReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



export default store