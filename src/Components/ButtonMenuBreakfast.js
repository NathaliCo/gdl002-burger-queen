import React, { Component } from 'react';
import './ButtonsMenu.css';
import { menu } from '../menu.json';
import { bindExpression } from '@babel/types';
import  { FirebaseContext } from './Firebase';

let count= 1;
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

  handleIncrement = (event) => {
    // let target = event.currentTarget;
    // console.log(target)
    // let key = target.getAttribute(this.props.extraClassName);
    // count +=  1
    // actualcommand[key].plus = count
    // console.log(count)
};

deleteItem(event){
  let target = event.currentTarget;
  console.log (target)
  let key = target.getAttribute("name");
  console.log(key)
  actualcommand.splice(key, 1);
  console.log("delete");
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
      addFood.innerHTML += `<button className = "order" onClick = ${this.handleIncrement(event)} extraClassName= ${i} key= ${i}> ${item.description}  /  ${item.price} / ${item.plus}</button>`
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
