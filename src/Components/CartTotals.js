import React from 'react'

export default function CartTotals({value}) {
   const{cartTotal, clear} = value;
    return (
        <React.Fragment>
            <div>
                <button className = "clear" onClick = {()=>clear()}>clear
                </button>
            </div>
            <h5>Total : <strong>$ {cartTotal}</strong></h5>
        </React.Fragment>
    );
}
