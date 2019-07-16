import React from "react";
import { ProductProvider } from "./Context";
import PrintInKitchen from "./chefPage/PrintInKitchen";
import "./chefPage.css";
import backgroundHead from "./assets/backgroundHead.jpg"


export default function ChefPage() {
  return (
    <section className="chefPage">
             <img className='bg' src={backgroundHead} />
      <ProductProvider>
        <PrintInKitchen />
      </ProductProvider>
    </section>
  );
}
