import React from "react";
import KitchenEachFood from "./KitchenEachFood";

export default function KitchenItem({ item, value }) {
  const {
    total,
    client,
    key
  } = item;
  const { ready } = value;

  return (
    <section >
      {item.order.map(element => {
        return (
          <span key={key + total}>
            <button
            key={key+client}
              className="optionReady btn btn-primary"
              onClick={() => ready(key)}
            >
              Ready
            </button>
            <KitchenEachFood key ={key} item={element} value={value} />
          </span>
        );
      })}
    </section>
  );
}
