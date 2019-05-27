import React from 'react'

export default function KitchenItem({item, value}) {
    const {id, description, img, price, total, count, date, client, waiter}= item;
    const {ready} = value
// console.log(item.order)

    return (
        <section>
         {item.map(food=>{
           console.log(item)
      
       //console.log(element.description)
         return <div key ={description}> {food.description} {food.count}
         
           
            </div>
         })}
   
        
        </section>
    )
}