import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import  Header from './Components/Header';
import WaiterPage from './Components/waiterPage';
import ChefPage from './Components/ChefPage';

// import { FirebaseDatabaseProvider } from "@react-firebase/database";
// import { FirestoreProvider } from "@react-firebase/firestore";



function App() {
  return (
    <BrowserRouter>
    
    <Header />
    <Route exact path= '/' component = {WaiterPage}/>
    <Route path = '/chef' component = {ChefPage}/>
    </BrowserRouter>
  ); 
}

export default App;



