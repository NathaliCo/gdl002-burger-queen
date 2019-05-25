import React from 'react'

export default function KitchenItem(item, value) {
    const {id, description, img, price, total, count, date, client, waiter}= item;
    const {ready} = value
 
    console.log(item);
    console.log("done")
    console.log(description)
    return (
        <div>
          <h1> {description} {count} </h1>
            <button className = "options btn-primary" onClick = {()=> ready(id)}>Ready</button>
        </div>
    )
}
