import React, {Component} from 'react';
import { ProductConsumer, ProductProvider } from './Context';
import OrderOptions from './OrderOptions';
import CartItem from './CartItem';
import CartList from './CartList';
import KitchenOrder from './KitchenOrder';
//import App from '../App';

export default function  Product ({product, value}) {
        const {img, description, price, id }=product;
console.log(value)
        return (
            <div className = "card">
                  <ProductConsumer>
                      {(value)=>(<div 
                className = "img-container p-5"  
                onClick = {()=>{
                    value.addToCart(id);
                        }}
                >
                <img src= {img} alt = "product"className = "card-img-top"/>
               {description}
               {price}
                
            </div> )}
            
            
            </ProductConsumer>
            
        </div>
        
       
        )
    
}

