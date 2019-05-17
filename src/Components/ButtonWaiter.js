import React, { Component } from 'react';
import './ButtonsMenu.css';
import { menu } from '../menu.json';

class ButtonWaiter extends Component {
  constructor() {
    super();
    this.state = {
      waiter: menu[2].waiter,
      waiterWho: "",
      isHidden: true,
    };
  };
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  
  whoWaiter() {
    const theWaiter = (document.querySelector('input[name=radioWaiter]:checked').value);
    const whoWaiter = document.getElementsByClassName('theWaiter')[0];
    whoWaiter.innerHTML = theWaiter

    this.setState ({ 
      waiterWho: theWaiter
    });
    console.log(this.state.waiterWho)
  }
  render() {
    const waiter = this.state.waiter.map((waiter, i) => {
      const theWaiter = waiter.name
      return (
        <div key={i}> <input type="radio" id={theWaiter} name="radioWaiter" value={theWaiter} checked={this.state.selected === theWaiter}
          onChange={(e) => this.whoWaiter()} />{waiter.name}</div>

      )
    });

    return (
      <div className="waiter">
        <button className="theWaiter btn btn-secondary" onClick={this.toggleHidden.bind(this)} >Waiter</button>
        {!this.state.isHidden && (
          <div className="menuWaiter">
            {waiter}
          </div>
        )}
      </div>
    );
  }
};

export default ButtonWaiter