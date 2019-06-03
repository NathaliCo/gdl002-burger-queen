import React from "react";
import "./CartItem.css";

export default function CartItem({ item, value }) {
  const {
    id,
    description,
    img,
    price,
    count,
    date,
    client,
    waiter
  } = item;
  const { increment, decrement, remove } = value;

  return (
    <div>
      <h1>
        {count} {description} {price} {date} {client} {waiter}{" "}
      </h1>
      <img alt="product" className="card-img-top" src={img} />
      <section key={date}>
        <div className="buttonsOptions">
          <button className="options btn-primary" onClick={() => decrement(id)}>
            -
          </button>
          <button className="options btn-primary" onClick={() => increment(id)}>
            +
          </button>
          <button className="options btn-primary" onClick={() => remove(id)}>
            delete
          </button>
        </div>
      </section>
    </div>
  );
}
