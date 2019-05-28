import React from "react";
import KitchenEachFood from "./KitchenEachFood";

export default function KitchenItem({ item, value }) {
  const {
    id,
    description,
    img,
    price,
    total,
    count,
    date,
    client,
    waiter,
    key
  } = item;
  const { ready } = value;

  return (
    <section>
      {item.order.map(element => {
        let id = element.id;
        return (
          <span key={key + total}>
            <button
              className="options btn btn-primary"
              onClick={() => ready(key)}
            >
              Ready
            </button>
            <KitchenEachFood item={element} value={value} />
          </span>
        );
      })}
    </section>
  );
}
