import React, { Component } from 'react';
import  ButtonMenuBreakfast from './ButtonMenuBreakfast';
import  ButtonMenuMeal from './ButtonMenuMeal';
import  Command from './Command';
import  AddCommand from './AddCommand';

class WaiterPage extends Component {
    render(){
        return(
<div className = "section group">
    <div className = "col span_1_of_2">
    <ButtonMenuBreakfast />
     <ButtonMenuMeal />
    </div>
    <div className = "col span_1_of_2">
    <Command />
    <AddCommand />
    <div >
    {/* <SomeComponent /> */}
    {/* <FirestoreProvider {...config} firebase={firebase}> */}
      <div>This is my app</div>
    {/* </FirestoreProvider> */}
    </div>
    <button>Send command to chef</button> 
    <button>Command states</button>
    </div>
    </div>
        )
    }
}
export default WaiterPage;