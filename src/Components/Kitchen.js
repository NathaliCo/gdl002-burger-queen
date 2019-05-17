import React, { Component } from 'react';

class Kitchen extends Component{

    getOrder(){
        var guardado = localStorage.getItem('datos');

        let objetoObtenido= JSON.parse(guardado);
        console.log(objetoObtenido[0].Items)
        objetoObtenido[0].Items.map((item, i)=>{
        let div = document.getElementsByClassName("ordersToKitchen")[0]
         div.innerHTML+= `<div>${item.description}-${Date.now()}</div>`
    })
    // actualcommand[0].Items.map((item, i)=>{
    //     let div = document.getElementsByClassName("ordersToKitchen")[0]
    //      div.innerHTML+= `<div>${item.description}-${Date.now()}</div>`
    // }
    }
    render(){
    return(
        <div>
    <button onClick = {this.getOrder}>Get orders</button>
    <div className = "ordersToKitchen"></div>
    </div>
    )
    }
}
export default Kitchen


