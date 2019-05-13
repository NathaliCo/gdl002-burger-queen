import React, { Component } from 'react';
import './ButtonsMenu.css';
//import  Menu from './Components/Menu';
import {menu} from '../menu.json';
import { bindExpression } from '@babel/types';

class ButtonMenuBreakfast extends React.Component {
  constructor() {
    super();
    this.state = {
        menuBreakfast : menu[0].breakfast,
        isHidden: true,
       
    };
}

toggleHidden () {
  this.setState({
    isHidden: !this.state.isHidden
  })
}

addToCommand (){
  let foodButtons= Array.from(document.getElementsByClassName("BreakfastMenu"))
for(let i = 0; i <foodButtons.length ; i++) {
  foodButtons[i].addEventListener("click",()=>{
        let filter=foodButtons[i].getAttribute('name');
        let addFood = document.getElementsByClassName('commands')[0];
        addFood.innerHTML += "<br>" + filter
     });
}
}
  render () {
    const breakfast= this.state.menuBreakfast.map((menu, i) => {
  return(
    <div className = "BreakfastMenu" name = {menu.description} key = {i}>
          <button className = "buttonBreakfast"onClick = {this.addToCommand} name = {menu.description}>
        {menu.description}
        <br/>
        {menu.price}
        </button>
        </div>
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

  {/* the road to learn REact
  the road to react
  by robin wieruch
   */}