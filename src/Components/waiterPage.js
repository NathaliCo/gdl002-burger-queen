import React from "react";
import { ProductProvider } from "./Context";
import ButtonMenuBreakfast from "./waiterPage/ButtonMenuBreakfast";
import ButtonMenuMeal from "./waiterPage/ButtonMenuMeal";
import "./waiterPage.css";
import KitchenOrder from "./waiterPage/KitchenOrder";
import ClientName from "./waiterPage/ClientName";
import backgroundHead from "./assets/backgroundHead.jpg"

function WaiterPage() {
  return (
    <section>
        <img className='bg' src={backgroundHead} />
      <ProductProvider>
        <div className="alert" />
        <div className="section group">
          <div className="col span_1_of_2">
            <ButtonMenuBreakfast />
            <ButtonMenuMeal />
          </div>
          <div className="col col2 span_1_of_2">
            <p>Order</p>
            <ClientName />
            <span className="typeMenu" name="" />
            <div className="order">
              <KitchenOrder />
            </div>
          </div>
        </div>
      </ProductProvider>
    </section>
  );
}
export default WaiterPage;
