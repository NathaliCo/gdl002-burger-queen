import React from 'react'
import KitchenEachFood from './KitchenEachFood';

export default function KitchenItem({item, value}) {
    const {id, description, img, price, total, count, date, client, waiter}= item;
    const {ready} = value
// console.log(item.order)

    return (
        <section>
         {item.order.map(element=>{
           
       let  id=element.id
       console.log(element)
       //console.log(element.description)
         return <KitchenEachFood item={element} value={value}/>
         })}
   
        
        </section>
    )
}