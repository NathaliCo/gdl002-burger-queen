import firebase from "../firebase";
import React, { Component } from "react";
import { menu } from "../menu.json";
const functions = require("firebase-functions");
//  const admin = require('firebase-admin');
// admin.initializeApp();

let newState = [];
let actualcommand = [];
let menuBreakfast = menu.filter(item => item.hour == "morning");
let menuMeal = menu.filter(item => item.hour == "evening");

const ProductContext = React.createContext();

class ProductProvider extends Component {
  constructor() {
    super();

    this.state = {
      menuBreakfast: menuBreakfast,
      menuMeal: menuMeal,
      menu: [],
      order: [],
      orderClient: [],
      orderWaiter: [],
      orderDone: [],
      cartDate: Date.now(),
      cartTotal: 0,
      orderInKitchen: []
    };
  }
  //Get waiter and client name
  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  //Upload data to firebase
  writeUserData = () => {
    firebase
      .database()
      .ref("menu")
      .set(menu);
  };

  //Get data from firebase and save in the menu state
  getUserData = () => {
    let ref = firebase.database().ref("menu");
    ref.on("value", snapshot => {
      const menu = snapshot.val();
      this.setState(menu);
    });
  };

  setProducts = () => {
    let tempMenu = [];
    menu.forEach(item => {
      const singleItem = { ...item };
      tempMenu = [...tempMenu, singleItem];
    });
    this.setState({
      menu: tempMenu
    });
  };

  //Do it when the page is loaded
  componentDidMount() {
    this.setProducts();
    this.getUserData();
    this.writeKitchenData();
  }

  //Do it after the DOM is update
  componentDidUpdate(prevProps, prevState) {
    if (prevState != this.state) {
      this.writeUserData();
    }
  }

  //Upload order to firebase and save in state.
  writeKitchenData = () => {
    let orderRef = firebase.database().ref("order");
    orderRef.child(Date.now()).set({
      client: this.state.orderClient,
      waiter: this.state.orderWaiter,

      order: [this.state.order]
    });

    let ref = firebase.database().ref("order");
    ref.on("value", snapshot => {
      const newState = this.snapshotToArray(snapshot);
      this.setState({
        orderInKitchen: newState
      });
    });
    this.clear();
  };

  //Getting data from firebase
  snapshotToArray = snapshot => {
    var returnArr = [];
    snapshot.forEach(function(childSnapshot) {
      var item = childSnapshot.val();
      item.key = childSnapshot.key;

      returnArr.push(item);
    });

    return returnArr;
  };
  //Find item for remove and add to cart
  getItem = id => {
    let product = this.state.menu.find(item => item.id === id).id;
    return product;
  };

  //Plus one food
  increment = id => {
    let tempCart = [...this.state.order];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.value;
    this.setState(
      () => {
        return { order: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  //One food less
  decrement = id => {
    let tempCart = [...this.state.order];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      this.remove(id);
    } else {
      product.total = product.count * product.value;
      this.setState(
        () => {
          return { order: [...tempCart] };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  //Delete food
  remove = id => {
    let tempProducts = [...this.state.menu];
    let tempCart = [...this.state.order];
    tempCart = tempCart.filter(item => item.id !== id);
    const index = this.getItem(id);

    let removedProduct = tempProducts[index];
    removedProduct.status = false;
    removedProduct.count = 0;
    removedProduct.value = 0;

    this.setState(
      () => {
        return {
          order: [...tempCart],
          menu: [...tempProducts]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  //For Done food, save data in done orders and delete from kitchen food
  ready = key => {
    let makingProducts = [...this.state.orderInKitchen];
    const index = this.state.orderInKitchen.find(item => item.key === key);
    let orderRef = firebase.database().ref("orderDone");
    orderRef.child(Date.now()).set(index);
    console.log("saved");

    let ref = firebase.database().ref("order");
    ref.child(index.key).remove();
    this.alertDone(index.waiter, index.client);
  };

  //alert
  alertDone(waiter, client) {
    alert(waiter + " the order " + client + " is ready");
  }
  //TODO:firestore onWrite for alert
  //Clear order section
  clear = () => {
    this.setState(
      () => {
        return { order: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };

  //Total ticket
  addTotals = () => {
    let total = 0;
    this.state.order.map(item => (total += item.total));
    this.setState(() => {
      return {
        cartTotal: total
      };
    });
  };

  //Add products to order section
  addToCart = id => {
    let tempProducts = this.state.menu;
    const index = this.getItem(id);
    const product = tempProducts[index];
    product.status = true;
    product.count = 1;
    const price = product.value;

    product.total = price;

    actualcommand.push(product);
    this.setState(
      () => {
        return { menu: tempProducts, order: [...this.state.order, product] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleProduct: this.handleProduct,
          addToCart: this.addToCart,
          printOrder: this.printOrder,
          increment: this.increment,
          decrement: this.decrement,
          remove: this.remove,
          clear: this.clear,
          writeKitchenData: this.writeKitchenData,
          ready: this.ready,
          handleInput: this.handleInput
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductConsumer, ProductProvider };
