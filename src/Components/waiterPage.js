import React from "react";
import { ProductProvider } from "./Context";
import ButtonMenuBreakfast from "./ButtonMenuBreakfast";
import ButtonMenuMeal from "./ButtonMenuMeal";
import "./waiterPage.css";
import KitchenOrder from "./KitchenOrder";
import ClientName from "./ClientName";

function WaiterPage() {
  return (
    <section>
      <ProductProvider>
        <div className="alert"></div>
        <div className="section group">
          <div className="col span_1_of_2">
            <ButtonMenuBreakfast />
            <ButtonMenuMeal />
          </div>
          <div className="col col2 span_1_of_2">
            <p>Order</p>
          <ClientName/>
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
