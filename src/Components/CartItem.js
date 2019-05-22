import React from 'react'

export default function CartItem({item, value}) {
 const {id, description, img, price, total, count, date, client, waiter}= item;
 const {increment, decrement, remove} =value 

 return (
    <span>
      <img src= {img} ></img>
      <span>{count}{description}{price}{date}{client}{waiter} </span>
      <span>

<span onClick={()=>
decrement(id)}>-</span>
<span onClick={()=>
increment(id)}>+</span>
<span onClick={()=>
remove(id)}>delete</span>
 
</span>
    </span>
  )
}
