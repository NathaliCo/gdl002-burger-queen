import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import Product from "./Product";

class ButtonMenuMeal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    };
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render() {
    return (
      <div className="menuTable">
        <button
          className="btn btn-primary"
          name="meal"
          onClick={this.toggleHidden.bind(this)}
        >
          Meal Menu
        </button>
        {!this.state.isHidden && (
          <div>
            <React.Fragment>
              <div className="menu">
                <ProductConsumer>
                  {value => {
                    return value.menuMeal.map(product => {
                      return <Product key={product.id} product={product} />;
                    });
                  }}
                </ProductConsumer>
              </div>
            </React.Fragment>
          </div>
        )}
      </div>
    );
  }
}

export default ButtonMenuMeal;
