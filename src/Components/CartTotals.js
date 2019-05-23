import React from 'react'

export default function CartTotals({value}) {
   const{cartTotal, clear, writeKitchenData} = value;
    return (
        <React.Fragment>
            <div>
                <button className = "clear" onClick = {()=>clear()}>clear
                </button>
            <button className ="send" onClick = {()=>writeKitchenData()}>Sent

            </button>
            </div>
            <h5>Total : <strong>$ {cartTotal}</strong></h5>
        </React.Fragment>
    );
}
