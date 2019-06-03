import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import KitchenList from "./KitchenList";

export default class PrintInKitchen extends Component {
  render() {
    return (
      <React.Fragment>
        <ProductConsumer>
          {value => {
          
            return (
              <section className="" >
                <KitchenList value={value} />
              </section>
            );
          }}
        </ProductConsumer>
      </React.Fragment>
    );
  }
}
