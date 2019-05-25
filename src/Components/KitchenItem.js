import React from 'react'

export default function KitchenItem({item, value}) {
    const {id, description, img, price, total, count, date, client, waiter}= item;
    const {ready} = value
 

    // ready = (id)=>{
    //     let makingProducts = [...this.state.order];
    //     const index = this.getItem(id);
    //     let makedProduct=makingProducts[index];
    //     makedProduct.rady= true;
    //     this.setState(()=>{
    //         return {
    //             order:[...makingProducts]
    //         }
    //         })
    // console.log(this.state.order);
    
    // }
    return (
        <section>
         {item.map(element=>{
       let  id=element.id
         return <div key ={id}> {element.description} {element.count}
            <button  className = "options btn-primary" onClick = {()=>ready(id)}>Ready</button>
            </div>
         })}
   
        
        </section>
    )
}
