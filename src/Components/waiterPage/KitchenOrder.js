import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default class KitchenOrder extends Component {
  render() {
    return (
      <React.Fragment>
        <ProductConsumer>
          {value => {
            return (
              <section className="kitchenOrder">
                <CartList value={value} />
                <CartTotals value={value} />
              </section>
            );
          }}
        </ProductConsumer>
      </React.Fragment>
    );
  }
}
