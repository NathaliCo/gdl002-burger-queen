import React  from 'react';

class  PrintOrder extends React.Component {
    render(props){
    return(  
        <div className = {props.className}> ${props.name}  /  ${props.extraClassName}>  </div>
    )
    }
  }
  export default PrintOrder