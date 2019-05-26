import React from 'react'
import {ProductConsumer} from './Context';
export default function inputsNames({value}) {
    const {handleInput, orderWaiter, orderClient}= value;
    return (
        <div>
             <div>
        <input 
        type="text"
        name="orderClient"
        placeholder="Client"
        onChange={handleInput}
        />
        <select 
        name="orderWaiter"
        onChange={handleInput}
        >
            <option>Waiter 1</option>
            <option>Waiter 2</option>
            <option>Waiter 3</option>
        </select>
    </div>


        </div>
    )
}
