import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import WaiterPage from "./Components/waiterPage";
import Header from "./Components/Header";
import ChefPage from "./Components/ChefPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/Waiter" component={WaiterPage} />
      <Route path="/chef" component={ChefPage} />
    </BrowserRouter>
  );
}

export default App;
