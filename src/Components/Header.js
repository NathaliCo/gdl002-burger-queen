import React, { Component } from 'react';
import './Header.css';
import {Link} from 'react-router-dom'
class Header extends Component {
    render() {
      return (
        <div className="header">
          <h1>Burguer Queen</h1>
          <div className = "buttonsWho">
             <Link className="btn btn-secondary active" to= '/Waiter'>Waiter</Link>
             <Link className="btn btn-secondary" to= '/chef'>Chef</Link>
            {/* <Link  to= "/"><button className="btn btn-secondary">Owner</button></Link> */}
          </div>
       </div>
      );
    }
  } 
  export default Header
  
  