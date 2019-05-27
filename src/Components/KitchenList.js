import React from 'react'
import KitchenItem from './KitchenItem';



export default function KitchenList({value}) {
    const {orderInKitchen}=value
    
    return (
        <div className= "container-table">
             {orderInKitchen.map(item=>{

             return (
                 <React.Fragment>
             <KitchenItem key= {item.key}  item = {item} value = {value}/>
             Client: {item.client} /Waiter: {item.waiter}
            </React.Fragment>
             )
      })}
            
        </div>
    )
}


