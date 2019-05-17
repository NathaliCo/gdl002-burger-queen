import React, { Component } from 'react';

const SendToChef=props=> {

  
        return(
            <button className = {props.className} onClick = {props.action} >Send to chef</button> 
        )
    
}
export default SendToChef