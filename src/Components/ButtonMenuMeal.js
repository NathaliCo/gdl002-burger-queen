import React, { Component } from 'react';
import './ButtonsMenu.css';
import { menu } from '../menu.json';
import ButtonMenu from './buttonMenu';
import PrintOrder from './PrintOrder';
import SendToChef from './SendToChef';
import ChefPage from './ChefPage';
let actualcommand = [{
  Waiter : " ",
  Client: " ",
  Hour : "0",
  Items:  []
}]

class ButtonMenuMeal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      command: [{
        Waiter : " ",
        Client: " ",
        Hour : "0",
        Items:  []
      }],
      isHidden: true,
      total: 0,
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

  addToCommand = (event) => {
    let target = event.currentTarget;
    let total = 0;
    console.log(target)
    let key = target.getAttribute("name");
    console.log(key)
    let addFood = document.getElementsByClassName('commands')[0];
    const menuMeal = menu[1].meal
    const menuObject = menuMeal[key];
    actualcommand[0].Items.push(menuObject)
    actualcommand[0].Items.forEach((item,i)=>{
      let price=item.value
      total =total+ price
      console.log(total)
document.getElementsByClassName('total')[0].innerHTML= "TOTAL: " + total 
    })
    this.setState(prevState => ({
      total:total,
      command: [...prevState.command, menuObject]
    }));
   
    console.log(actualcommand)
     addFood.innerHTML += 
     `<div className = "order"> 
       ${menuObject.description}  /  ${menuObject.price}   
   </div>`
  }

  sending=()=> {
    localStorage.setItem('orders', JSON.stringify(actualcommand));

   }
    
  //   actualcommand[0].Waiter = "5",
  //   actualcommand[0].Client = "safs",
  //   actualcommand[0].Hour = "safa"
  //  this.setState({
  //    command:actualcommand
  //  })
  //  console.log(this.state.command);
  

  render() {
    const menuMeal = menu[1].meal
    const meal = menuMeal.map((menu, i) => {
      return (
        <div>
          <ButtonMenu
            key={i}
            action={this.addToCommand}
            description={menu.description}
            price={menu.price} name={i} 
            className="buttonMeal"
          />
        </div>
      )
    });
    return (

      <div className="menuTable">
        <button onClick={this.toggleHidden.bind(this)} >Meal Menu</button>
        {!this.state.isHidden && (
          <p>{meal}</p>
        )}
         <SendToChef 
        className="sending"
        action={this.sending} 
        />
      </div>
    ); 
  }
};

export default ButtonMenuMeal

