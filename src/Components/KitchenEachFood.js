import React from 'react'

export default function KitchenItem({item, value}) {
    const {id, description, img, price, total, count, date, client, waiter}= item;
    const {ready} = value

    return (
        <section>
         {item.map(food=>{
         return <div key ={description}> <strong>{food.description} {food.count}</strong>
            </div>
         })}

        </section>
    )
}