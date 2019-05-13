import React from 'react';
import './App.css';
import  Header from './Components/Header';
import  ButtonMenuBreakfast from './Components/ButtonMenuBreakfast';
import  ButtonMenuMeal from './Components/ButtonMenuMeal';
import  ButtonWaiter from './Components/ButtonWaiter';
import  Command from './Components/Command';
import  ClientName from './Components/ClientName';


// import  ButtonMenu from './Components/ButtonMenu';



function App() {
  return (
    <div>
    <Header />
    <div className = "section group">
    <div className = "col span_1_of_2">
    <ButtonMenuBreakfast />
     <ButtonMenuMeal />
    </div>
    <div className = "col span_1_of_2">
    <Command />
    <ClientName />
    <div >
      
    
    </div>
    <button>Send command to chef</button>
    
    <button>Command states</button>
    </div>
    </div>
    </div>
    
  );
  
}


export default App;



