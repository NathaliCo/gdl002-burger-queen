import React, { Component } from 'react';
import './Command.css';
import  ButtonWaiter from './ButtonWaiter';

class Command extends Component {

  Eraser(){
    document.getElementsByClassName("commands")[0].innerHTML = " ";
  }
    render() {
      return (
        <div className="command">
        <p className="order">Order</p>
          <div className = "selectWaiter">Select Waiter<ButtonWaiter /></div>
         <p className = "actualWaiter"></p>
         <div className="commands"></div>
         <button className="eraser btn btn-secondary" onClick={this.Eraser}>Delete</button>
          </div>
        
      );
    }
  } 
  export default Command