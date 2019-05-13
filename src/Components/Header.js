import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
      return (
        <div className="header">
          <h1>Burguer Queen</h1>
          <div className = "buttonsWho">
             <button className="btn btn-secondary active">Waiter</button>
             <button className="btn btn-secondary">Chef</button>
             <button className="btn btn-secondary">Owner</button>
          </div>
        </div>
      );
    }
  } 
  export default Header
  
  