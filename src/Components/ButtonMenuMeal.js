import React, { Component } from 'react';
import './ButtonsMenu.css';
import {menu} from '../menu.json';
// import {ButtonMenu} from './ButtonMenu'

class ButtonMenuMeal extends Component {
    constructor() {
        super();
        this.state = {
            menuMeal: menu[1].meal,
            isHidden: true
        };
    };
    toggleHidden () {
        this.setState({
          isHidden: !this.state.isHidden
        })
      }
    
  render (){
     const meal=  this.state.menuMeal.map((menu, i) => {
            
            return(
              <div className = "MealMenu" key = {i}> 
                <button name = {menu.description}>
                  {menu.description}
                  <br></br>
                  {menu.price}
                  </button>
              </div>

            )  
        });   
    
    return (
        <div className="menuTable">
<button onClick={this.toggleHidden.bind(this)} >Meal menu</button>
{!this.state.isHidden && (
<p>{meal}</p>
)}
</div>
      );
    }
};

  export default ButtonMenuMeal