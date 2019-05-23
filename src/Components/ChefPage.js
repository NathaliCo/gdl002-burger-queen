import React, { Component } from 'react';
import KitchenOrder from './KitchenOrder';
import {ProductProvider} from './Context'


class ChefPage extends Component {
    render(){
        return (
                <ProductProvider>
<div className = "orders">Orders

</div>
</ProductProvider>
        )}
}
export default ChefPage;