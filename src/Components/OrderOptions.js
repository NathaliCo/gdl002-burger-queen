import React, {Component} from 'react'
import { ProductConsumer } from './Context';
export default function OrderOptions({product, value}){
 const {id}=product
 const {increment, decrement, remove} =value 
  return (
    <ProductConsumer>
<span>

    <span onClick={()=>
    decrement(id)}>-</span>
    <span onClick={()=>
    increment(id)}>-</span>
    <span onClick={()=>
    remove(id)}>-</span>
     
  </span>
  </ProductConsumer>
  
)
    }


     