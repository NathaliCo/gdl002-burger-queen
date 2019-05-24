import React from 'react'

export default function CartTotals({value}) {
   const{cartTotal, clear, writeKitchenData} = value;
    return (
        <React.Fragment>
            <div>
                <button className = "btn btn-primary active" onClick = {()=>clear()}>Clear
                </button>
            <button className ="btn btn-primary " onClick = {()=>writeKitchenData()}>Send

            </button>
            </div>
            <h5>Total : <strong>$ {cartTotal}</strong></h5>
        </React.Fragment>
    );
}
