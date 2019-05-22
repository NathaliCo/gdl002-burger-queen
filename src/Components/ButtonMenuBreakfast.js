import React, { Component } from 'react';
import { menu } from '../menu.json';
import ProductList from './ProductList.js';
import {ProductConsumer} from './Context'
import Product from './Product';
import './buttonsMenu.css';

class ButtonMenuBreakfast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
      isHidden: true,
    };
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden,
    })
  }


  render() {
  
    return (
      <div className="menuTable">
        <button onClick={this.toggleHidden.bind(this)} >Breakfast Menu</button>
        {!this.state.isHidden && (
          <div><React.Fragment>
          <div className = "menu">
          <ProductConsumer>
              {value=>{
              return value.menuBreakfast.map(product =>{
                 return  <Product key={product.id} product = 
                 {product} />
              })
          }}
          </ProductConsumer>
          </div>
          </React.Fragment></div>
        )}
      </div>
    ); 
  }
};

export default ButtonMenuBreakfast

