import React from 'react'
import KitchenItem from './KitchenItem';



export default function KitchenList({value}) {
    const {orderInKitchen}=value
    console.log(orderInKitchen)
    
    return (
        <div className= "container-table">
             {orderInKitchen.map(item=>{
        return <KitchenItem key= {item.description}/>
      })}
            
        </div>
    )
}


