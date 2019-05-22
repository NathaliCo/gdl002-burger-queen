import React, { Component } from 'react';
 import CartColumns from './CartColumns';
 import Empty from './Empty';
 import {ProductConsumer} from './Context';
// import Product from './Product';
 import CartList from './CartList';
 import CartTotals from './CartTotals';

export default class KitchenOrder extends Component{
render() {
   
    return (
    <section>
        <ProductConsumer>
            {value =>{
                const { order } = value ;
                

            return (
                <React.Fragment>
                    <h1>Cart</h1>
                    <CartColumns/>
                    <CartList value = {value}/>
                    <CartTotals value = {value}/>
                </React.Fragment>
            );
                
            }}
        </ProductConsumer>
    </section>
       
        
       
        )
}
}
