import React, { Component } from 'react'
import KitchenList from './KitchenList'
import {ProductConsumer} from './Context';


export default class PrintInKitchen extends Component {
    render() {
        return (
            <React.Fragment>
                <ProductConsumer>
{value =>{
    const {orderInKitchen, ready}= value;
    
    
    return (
        <section className = "">
            <KitchenList value = {value}/>
            </section>
    );
}}
                </ProductConsumer>
                </React.Fragment>
        )}
}
