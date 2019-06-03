import React from "react";
import { ProductProvider } from "./Context";
import PrintInKitchen from "./chefPage/PrintInKitchen";
import "./chefPage.css";

export default function ChefPage() {
  return (
    <section className="chefPage">
      <ProductProvider>
        <PrintInKitchen />
      </ProductProvider>
    </section>
  );
}
