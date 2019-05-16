import React, { Component } from 'react';
import './ButtonsMenu.css';
import { menu } from '../menu.json';
import DeleteEachOne from './DeleteEachOne'

let actualcommand = [];

class ButtonMenuMeal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      command:[],
      isHidden: true,
      count: 0
    };    
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden,
    })
  }
  handleIncrement = () => {
    this.setState({
        count: this.state.count + 1
    });
    console.log(this.state.count)
};

    addToCommand=(event)=> {
      let target = event.currentTarget;
      let key = target.getAttribute("name"); 
      let addFood = document.getElementsByClassName('commands')[0];
      const menuMeal = menu[1].meal
      const menuObject = menuMeal[key];
       actualcommand.push(menuObject)
      this.setState (prevState=>({ 
        command: [...prevState.command, menuObject]
      }));
      console.log(this.state.command)
    addFood.innerHTML += `<div className = "order" name= ${menuObject}> ${menuObject.description}  /  ${menuObject.price}  <button name= ${menuObject} className = " delete">x</button>   </div>`
      }




      plus (menuObject){
        // document.
        // menuObject.price
      }



  render() {
    const menuMeal = menu[1].meal
    const meal = menuMeal.map((menu, i) => {
      return (
        <button name={i} key={menu.description} className="buttonMeal" onClick={this.addToCommand}>
          {menu.description}
          <br />
          {menu.price}
        </button> 
      )
    });
    return (
      
      
      <div className="menuTable">
        <button onClick={this.toggleHidden.bind(this)} >Meal Menu</button>
        {!this.state.isHidden && (
           <p>{meal}</p>
        )}
        <button onClick={this.handleIncrement}>+</button>
      </div>


    );
  }

};

  export default ButtonMenuMeal

