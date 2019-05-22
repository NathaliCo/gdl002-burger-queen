import React, {Component} from 'react';

const Delete = props =>{
    return (
        <button onClick={props.action} index={props.index}>
           {props.name} 
        </button>
    )
}
export default Delete