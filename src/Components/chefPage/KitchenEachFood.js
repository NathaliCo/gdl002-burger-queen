import React from "react";

export default function KitchenItem({ item, value }) {
  const {
    client,
  } = item;
  return (
    <section>
      {item.map(food => {
        return (
          <div key={client}>
            {" "}
            <strong>
              {food.description} {food.count}
            </strong>
          </div>
        );
      })}
    </section>
  );
}
