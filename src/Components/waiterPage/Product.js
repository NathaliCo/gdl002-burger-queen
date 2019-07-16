import React from "react";
import { ProductConsumer} from "../Context";

export default function Product({ product, value }) {
  const { img, description, price, id } = product;
  return (
    <div className="card">
      <ProductConsumer>
        {value => (
          <div
            className="img-container "
            onClick={() => {
              value.addToCart(id);
            }}
          >
            <img src={img} alt="product" className="cardImg" />
            {description}
            {price}
          </div>
        )}
      </ProductConsumer>
    </div>
  );
}
