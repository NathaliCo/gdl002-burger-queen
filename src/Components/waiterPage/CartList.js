import React from "react";
import CartItem from "./CartItem";

export default function CartList({ value }) {
  const { order } = value;

  return (
    <div className="container-table">
      {order.map(item => {
        return <CartItem key={item.description} item={item} value={value} />;
      })}
    </div>
  );
}
