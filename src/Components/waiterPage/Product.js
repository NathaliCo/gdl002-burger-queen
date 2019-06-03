import React from "react";
import { ProductConsumer} from "../Context";

export default function Product({ product, value }) {
  const { img, description, price, id } = product;
  return (
    <div className="card">
      <ProductConsumer>
        {value => (
          <div
            className="img-container p-5"
            onClick={() => {
              value.addToCart(id);
            }}
          >
            <img src={img} alt="product" className="card-img-top" />
            {description}
            {price}
          </div>
        )}
      </ProductConsumer>
    </div>
  );
}
