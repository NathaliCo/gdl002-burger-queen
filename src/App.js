import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import WaiterPage from "./Components/waiterPage";
import Header from "./Components/Header";
import ChefPage from "./Components/ChefPage";
import backgroundHead from "./Components/assets/backgroundHead.jpg"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <img className='bg' src={backgroundHead} />
      <Route exact path="/Waiter" component={WaiterPage} />
      <Route path="/chef" component={ChefPage} />
    </BrowserRouter>
  );
}

export default App;
