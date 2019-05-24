import React from 'react'

export default function KitchenItem(item, value) {
    const {id, description, img, price, total, count, date, client, waiter}= item;
 
    console.log(item);
    console.log("done")
    console.log(description)
    return (
        <div>
          <h1> {description} {count} </h1>
        </div>
    )
}
