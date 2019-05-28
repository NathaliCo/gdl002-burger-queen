import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import WaiterPage from "./components/WaiterPage";
import Header from "./components/Header";
import ChefPage from "./components/ChefPage";

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
