import React, { Component } from 'react';
import  ButtonMenuBreakfast from './ButtonMenuBreakfast';
import  ButtonMenuMeal from './ButtonMenuMeal';
import  SendToChef from './SendToChef';
import  AddCommand from './AddCommand';

class WaiterPage extends Component {
    constructor(){
        super();
        this.state = {
          command:[]
        }
        
      }
    render(){
        return(
<div className = "section group">
    <div className = "col span_1_of_2">
    <ButtonMenuBreakfast />
    <ButtonMenuMeal />
    </div>
    <div className = "col span_1_of_2">
    <AddCommand/>
    <div>
    </div>
    <button>States</button>
    
    </div>
    </div>
        )
    }
}
export default WaiterPage;