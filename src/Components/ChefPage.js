import React, { Component } from 'react';
import KitchenOrder from './KitchenOrder';
import {ProductProvider} from './Context'
import firebase from '../firebase'
import PrintInKitchen from './PrintInKitchen'


class ChefPage extends Component {
    render(){
        return (
               <React.Fragment>
<h2 className = "orders">Orders

</h2>
{/* <div><PrintInKitchen/></div> */}

</React.Fragment>
        )}
}
export default ChefPage;