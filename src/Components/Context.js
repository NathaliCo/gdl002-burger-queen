import firebase from '../firebase'
import React, {Component} from 'react';
import {menu} from '../menu.json'
import Delete from './Delete';
let actualcommand =[]

const ProductContext = React.createContext();

class ProductProvider extends Component {
    constructor (){
        super ();
      
    this.state = {
        menuBreakfast: [],
        menuMeal: [],
        order: [],
        cartClient:"",
        cartWaiter:"",
        cartDate: Date.now(),
        cartTotal: 0
    }

}

writeUserData = () => {
    firebase.database().ref('menu').set(menu);
    console.log('DATA SAVED');
  }

  getUserData = () => {
    let ref = firebase.database().ref('menu');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      this.setState(state);
      console.log(state);
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
console.log(product.count);
console.log(product.value);
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
   let tempProducts = [...this.state.menuBreakfast];
   let tempCart = [...this.state.order];
   tempCart=tempCart.filter(item=>item.id !==id);  
   const index = this.getItem(id);
   console.log(index);
   let removedProduct = tempProducts[index];
   removedProduct.status = false;
   removedProduct.count = 0;
   removedProduct.value = 0;

   this.setState(()=>{
       return {
           order: [...tempCart],
           menuBreakfast: [...tempProducts]
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

        let tempMenuMeal = [];
        let tempMenuBreakfast = [];
         menu[0].breakfast.forEach(item=>{
            const singleItem ={...item};
            tempMenuBreakfast = [...tempMenuBreakfast,singleItem]
        })
        menu[1].meal.forEach(item=>{
            const singleItem ={...item};
            tempMenuMeal = [...tempMenuMeal,singleItem]
        })
        this.setState({
            menuBreakfast: tempMenuBreakfast,
            menuMeal:  tempMenuMeal
          });
    }
getItem = (id) =>{
    let product = this.state.menuBreakfast.find(item=> item.id ===id).id
   return product
}
addToCart = (id)=>{
     let tempProducts = this.state.menuBreakfast
     const index = this.getItem(id);
     const product = tempProducts[index]
     product.status = true;
     product.count = 1;
    const price = product.value;
    console.log(price)
    product.total = price;
    console.log(product.total)
    actualcommand.push(product);
    this.setState(()=>{
        return {menuBreakfast: tempProducts, order:[...this.state.order, product] };
    },()=>{this.addTotals();});  
}

printOrder = ()=>{
    let addFood = document.getElementsByClassName('order')[0];
    
    addFood.innerHTML = "";
    actualcommand.map((item, i)=>{
        let action= ()=> this.remove(i);
         addFood.innerHTML +=  `<div className = "order" key= ${i}> ${item.count}/${item.description}  / ${item.value}</div>`+ `<Delete name="Delete" action= ${action} index=${i}>`+"Delete"+`</Delete>`
                })
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
        }}>
            {this.props.children}
        </ProductContext.Provider>
        )    
} 
}

const ProductConsumer = ProductContext.Consumer;
export {ProductConsumer, ProductProvider};
 