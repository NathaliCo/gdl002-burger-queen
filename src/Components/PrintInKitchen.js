
import React, { Component } from 'react';
import firebase from '../firebase'

let newState =[]
export default class PrintInKitchen extends Component {
    constructor (){  
      super();
    this.state = {
        orderPrint: [] 
    }
}
componentDidMount(){
    this.printOrders();
}

printOrders=()=>{
    console.log(this.state.orderPrint)
    let ref = firebase.database().ref('order');
    ref.on('value', snapshot => {
      const newState = snapshot.val();
      console.log(newState);
    });
    this.setState({
        orderPrint:newState
    })
//     {newState.map((item, i)=>{
//         `<p key= ${i}>
//            ${item}
//        </p>`
        
//     })
    
// }
}
    
    render(){ 
       return(
<button onClick={this.printOrders}>print</button>
       )
}
}