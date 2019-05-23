import firebase from '../firebase'
import React, {Component} from 'react';
import {menu} from '../menu.json'

let actualcommand =[]
let menuBreakfast =menu.filter(item=>(item.hour=="morning"))
let menuMeal =menu.filter(item=>(item.hour=="evening"))


const ProductContext = React.createContext();

class ProductProvider extends Component {
    constructor (){
        super ();
      
    this.state = {
        menuBreakfast: menuBreakfast,
        menuMeal: menuMeal,
        menu: [],
        order: [],
        cartClient:"",
        cartWaiter:"",
        cartDate: Date.now(),
        cartTotal: 0
    }

}


writeKitchenData = ()=>{
    let userRef = firebase.database().ref('orders');
    userRef.child(
   Date.now()).set(this.state.order)
    console.log("saved")
    let ref = firebase.database().ref('orders');
        ref.on('value', snapshot => {
          const order = snapshot.val();
          console.log(order);
        });
}

writeUserData = () => {
    firebase.database().ref('menu').set(menu);
  }

  getUserData = () => {
    let ref = firebase.database().ref('menu');
    ref.on('value', snapshot => {
      const menu = snapshot.val();
      this.setState(menu);
      console.log(menu);
    });
}
componentDidMount(){
    this.setProducts();
    this.getUserData();
   
    
}

componentDidUpdate(prevProps, prevState){
if (prevState != this.state){
    this.writeUserData();

}
}


increment = (id)=>{
    let tempCart= [...this.state.order];
    const selectedProduct = tempCart.find(item=>item.id===id)
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count +1;
    product.total = product.count *product.value;
    this.setState(
        ()=>{
            return{ order:[...tempCart]};
        },
        ()=>{this.addTotals();
        }
    );
};

decrement =(id)=>{
    let tempCart= [...this.state.order];
    const selectedProduct = tempCart.find(item=>item.id===id)
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
        this.remove(id)
    }
    else{
        product.total = product.count *product.value
        this.setState(
        ()=>{
            return{ order:[...tempCart]}
        },
        ()=>{this.addTotals();
        }
    );
}
    }
    

remove = (id)=>{
   let tempProducts = [...this.state.menu];
   let tempCart = [...this.state.order];
   tempCart=tempCart.filter(item=>item.id !==id);  
   const index = this.getItem(id);
  
   let removedProduct = tempProducts[index];
   removedProduct.status = false;
   removedProduct.count = 0;
   removedProduct.value = 0;

   this.setState(()=>{
       return {
           order: [...tempCart],
           menu: [...tempProducts]
       }
   },()=>{
       this.addTotals();
   }
   )
}

clear = () =>{
    this.setState (()=>{
        return {order:[]}
    },()=>{
        this.setProducts();
        this.addTotals();
    });
    
    
}

addTotals =()=>{ let total=0;
    this.state.order.map(item=>(total+= item.total))
    this.setState(()=>{
        return{
            cartTotal:total
        }
    })
}
    setProducts = ()=>{

       
        let tempMenu = [];
         menu.forEach(item=>{
            const singleItem ={...item};
            tempMenu = [...tempMenu,singleItem]
        })
       
        this.setState({
            menu: tempMenu,
           
          });
    }
getItem = (id) =>{
    let product = this.state.menu.find(item=> item.id ===id).id
   return product
}
addToCart = (id)=>{
     let tempProducts = this.state.menu
     const index = this.getItem(id);
     const product = tempProducts[index]
     product.status = true;
     product.count = 1;
    const price = product.value;
    
    product.total = price;
    
    actualcommand.push(product);
    this.setState(()=>{
        return {menu: tempProducts, order:[...this.state.order, product] };
    },()=>{this.addTotals();});  
}

    render (){
        return (
        <ProductContext.Provider value = {{
            ...this.state,
            handleProduct: this.handleProduct,
            addToCart: this.addToCart,
            printOrder:this.printOrder,
            increment:this.increment,
            decrement: this.decrement,
            remove: this.remove,
            clear: this.clear,
            writeKitchenData: this.writeKitchenData 
        }}>
            {this.props.children}
        </ProductContext.Provider>
        )    
} 
}

const ProductConsumer = ProductContext.Consumer;
export {ProductConsumer, ProductProvider};
 