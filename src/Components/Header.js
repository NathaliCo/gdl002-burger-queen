import React, { Component } from 'react';
import './Header.css';
import {Link} from 'react-router-dom'
class Header extends Component {
    render() {
      return (
        <div className="header">
          <h1>Burguer Queen</h1>
          <div className = "buttonsWho">
             <Link exact to= "/"><button Link className="btn btn-secondary active">Waiter</button></Link>
             <Link  to= "/Chef"><button className="btn btn-secondary">Chef</button></Link>
             <Link  to= ""><button className="btn btn-secondary">Owner</button></Link>
          </div>
        </div>
      );
    }
  } 
  export default Header
  
  