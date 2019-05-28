import React, {Component} from 'react';
import {menu} from '../menu.json';
import {ProductConsumer} from './Context'
import Product from './Product';

export default class Button extends Component {
render(){

return (
<React.Fragment>
<div className = "menu">
<ProductConsumer>
    {value=>{
    return value.menuBreakfast.map(product =>{
       return  <Product key={product.id} product = 
       {product} />
    })
}}
</ProductConsumer>
</div>
</React.Fragment>
)
}
}

