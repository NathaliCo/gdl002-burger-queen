import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import  Header from './Components/Header';
import WaiterPage from './Components/waiterPage';
import ChefPage from './Components/ChefPage';



class App extends Component {

  
render(){
  return (
    <BrowserRouter>
    <Header />
    <Route exact path= '/' component = {WaiterPage}/>
    <Route path = '/chef' component = {ChefPage}/>
    </BrowserRouter>
  ); 
}
}

export default App;



