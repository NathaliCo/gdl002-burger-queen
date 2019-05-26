import React, { Component } from 'react'
import {ProductConsumer} from './Context';



export default class ClientName  extends Component {
    
render(){
        console.log("in")
        return (
            <ProductConsumer>
{value =>{
    const {handleInput, orderWaiter, orderClient}= value;
  
    return (
        <div>
        <input 
        type="text"
        name="orderClient"
        placeholder="Client"
        onChange={handleInput}
        />
        <select 
        name="orderWaiter"
        onChange={handleInput}
        >
            <option>Waiter 1</option>
            <option>Waiter 2</option>
            <option>Waiter 3</option>
        </select>
    </div>


    );
}}
                </ProductConsumer>
    )       
}
}
