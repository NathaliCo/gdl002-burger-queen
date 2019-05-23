import React, { Component } from 'react';
import firebase from '../firebase'

class SendToChef extends Component {
    constructor(){
        super();
    this.state ={
        order:[]
    }
}
    
    getKitchenData(){
        let ref = firebase.database().ref('orders');
        ref.on('value', snapshot => {
          const order = snapshot.val();
          console.log(order);
        });
    }

  render(){
        return(
            <button className = "" onClick = {this.getKitchenData}  >Send to chef</button> 
        )
    
}
}
export default SendToChef