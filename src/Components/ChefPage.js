import React, { Component } from 'react';
import KitchenOrder from './KitchenOrder';
import {ProductProvider} from './Context'
import firebase from '../firebase'
import PrintInKitchen from './PrintInKitchen'

export default function ChefPage() {
    return (
        <section>
            <ProductProvider>
                <PrintInKitchen/>
                </ProductProvider>
        </section>

    )
}
