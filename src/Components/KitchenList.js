import React from 'react'
import KitchenItem from './KitchenItem';
import './kitchenList.css'



export default function KitchenList({value}) {
    const {orderInKitchen}=value
    
    return (
        <div className= "container-table">
             {orderInKitchen.map(item=>{

             return (
                <span className="whoOrder"key= {item.key}  >
             <KitchenItem key= {item.key}  item = {item} value = {value}/>
             Client: {item.client} /Waiter: {item.waiter}
             </span> 
             )
      })}
            
        </div>
    )
}


