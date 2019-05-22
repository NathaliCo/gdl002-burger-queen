import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import {ProductProvider} from './Context'
import {ProductConsumer} from './Context'
import ProductList from './ProductList';
import ButtonMenuBreakfast from './ButtonMenuBreakfast';
import ButtonMenuMeal from './ButtonMenuMeal';
import './waiterPage.css';
import CartList from './CartList';
import CartColumns from './CartColumns';
import Empty from './Empty';
import KitchenOrder from './KitchenOrder';

function WaiterPage() {
    return (
        <section> 
<ProductProvider>
<div className = "section group">
<div className = "col span_1_of_2">
<ButtonMenuBreakfast/>
<ButtonMenuMeal/>
</div>
<div className = "col span_1_of_2">
Order
<div className = "order">
<KitchenOrder/>
</div>
</div>
</div>
</ProductProvider>
</section>

)
}
export default WaiterPage;