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
      <section className="eachItem">
      <section key={date}>
        <div className="buttonsOptions">
        <span>
        {count} {description} {price} {date} {client} {waiter}{" "}
      </span>
          <button className="options btn-primary" onClick={() => decrement(id)}>
            -
          </button>
          <button className="options btn-primary" onClick={() => increment(id)}>
            +
          </button>
          <button className="options btn-primary" onClick={() => remove(id)}>
            del
          </button>
        </div>
        </section>
      </section>
    </div>
  );
}
