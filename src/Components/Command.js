import React, { Component } from 'react';
import './Command.css';
import  ButtonWaiter from './ButtonWaiter';

class Command extends Component {
    render() {
      return (
        <div className="command">
        <p>Order</p>
          <p>Select Waiter<ButtonWaiter /></p>
         <p className = "actualWaiter"></p>
         <div className="commands"></div>
          </div>
        
      );
    }
  } 
  export default Command