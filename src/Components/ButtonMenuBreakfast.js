import React, { Component } from 'react';
import './ButtonsMenu.css';
import { menu } from '../menu.json';
import ButtonMenu from './buttonMenu.js';


let actualcommand = [];
class ButtonMenuBreakfast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      command:[],
      isHidden: true,
    };    
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden,
    })
  }
  

  addToCommand=(event)=> {
    let target = event.currentTarget;
    let key = target.getAttribute("name"); 
    let addFood = document.getElementsByClassName('commands')[0];
    const menuBreakfast = menu[0].breakfast
    const menuObject = menuBreakfast[key];
     actualcommand.push(menuObject)
    this.setState ({ 
      command: actualcommand
    });
    console.log(this.state.command)
    addFood.innerHTML =""
    actualcommand.map((item, i)=>{
    addFood.innerHTML += `<div className = "order" onClick = ${this.handleIncrement(event)} extraClassName= ${i} key= ${i}> ${item.description}  /  ${item.price} / ${item.plus}</div>`
    })
    }

  render() {
    const menuBreakfast = menu[0].breakfast
    const breakfast = menuBreakfast.map((menu, i) => {
      return (
        
        <button name={i} key={menu.description} className="buttonBreakfast" onClick={this.addToCommand}>
          {menu.description}
          <br />
          {menu.price}
        </button>
      )
    });
    return (
      
      <div className="menuTable">
        <button onClick={this.toggleHidden.bind(this)} >Breakfast Menu</button>
        {!this.state.isHidden && (
          <p>{breakfast}</p>
        )}
      </div>


    );
  }

};
export default ButtonMenuBreakfast
