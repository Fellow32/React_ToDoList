import {Routes,Route} from 'react-router-dom';
import './App.scss';
import LoginPage from './pages/LoginPage/LoginPage'
import MainPage from './pages/MainPage/MainPage';



function App() {
  
  return (
   
    <div className="App">

           
             <Routes>
             <Route path='/' element={<LoginPage/>} />
             <Route path='/main' element={<MainPage/>}/>
             </Routes>
          

                  
         




    </div>

  );
}

export default App;
