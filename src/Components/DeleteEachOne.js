import React from 'react';


const DeleteEachOne = props =>{

  return(
    <button onClick={props.action} className = {props.className}>X</button>
  )
}

export default DeleteEachOne;