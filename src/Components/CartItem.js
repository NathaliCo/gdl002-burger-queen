import React from 'react'
import './CartItem.css'

export default function CartItem({item, value}) {
 const {id, description, img, price, total, count, date, client, waiter}= item;
 const {increment, decrement, remove} =value 

 return (
    <div>
      
      <h1>{count} {description} {price} {date} {client} {waiter} </h1>
      <img className = "card-img-top" src= {img} ></img>
      <section>
<div class = "buttonsOptions">
<button className = "options btn-primary"onClick={()=>
decrement(id)}>-</button>
<button className = "options btn-primary"onClick={()=>
increment(id)}>+</button>
<button className = "options btn-primary"onClick={()=>
remove(id)}>delete</button>
 </div>
</section>
</div>
   
  )
}
