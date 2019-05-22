import React from 'react';
//import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import WaiterPage from './components/WaiterPage';
import Header from './components/Header';
import ChefPage from './components/ChefPage';
import KitchenOrder from './components/KitchenOrder';

function App() {
  return (
    <BrowserRouter>
     <Header />
     <Route exact path= '/Waiter' component = {WaiterPage}/>
    <Route path = '/chef' component = {ChefPage}/>
    </BrowserRouter>

  );
}

export default App;
