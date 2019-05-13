import React, { Component } from 'react';
import './ClientName.css';

class ClientName extends Component{
constructor(){
    super();
    this.state = {

    }
}


render(){
    return (
        <form>
  <label>
    Client Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Send command to the chef" />
</form>
    )
}
}

export default ClientName