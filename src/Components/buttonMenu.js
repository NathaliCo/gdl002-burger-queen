import React from 'react';

const ButtonMenu =props=> {
    return(
      <button name={props.name} onClick={props.action} className={props.className}>
        {props.description}
        {props.price}
      </button>
    )
  }
  export default ButtonMenu