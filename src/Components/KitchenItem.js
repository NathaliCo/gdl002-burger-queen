import React from 'react'
import KitchenEachFood from './KitchenEachFood';

export default function KitchenItem({item, value}) {
    const {id, description, img, price, total, count, date, client, waiter, key}= item;
    const {ready} = value
    console.log(key)
// console.log(item.order)

    return (
        <section>
         {item.order.map(element=>{
      
       let  id=element.id
       console.log(element)
       //console.log(element.description)
         return (
         <p >
           <KitchenEachFood item={element} value={value}/> 
         <button  className = "options btn-primary" onClick = {()=>ready(key)}>Ready</button>
         </p>
         )})}
   
        
        </section>
    )
}