import React,{useState} from "react";
import Header from "./component/Header/Header";
import ProductList from "./component/ListItem/ProductList";
import Footer from "./component/Footer/Footer";
import Cart from "./component/cart/Cart";
import Card from "./UI/Card/Card";


const productsArr = [

  {id:1,title: 'Colors',price: 100,imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',},
  {id:2,title: 'Black and white Colors', price: 50,imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',},
  {id:3,title: 'Yellow and Black Colors',price: 70,imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',},
  {id:4,title: 'Blue Color',price: 100,imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',}
  
  ]
  
  
function App() {
  const [cartSate,setcartSate]=useState(false)
  const CartHandler=()=>{
   
   console.log('state Handler')
   setcartSate(!cartSate)
  }
  return (
    <Card>
     
      <Header cartHandler={ CartHandler}></Header>
      
     
     <ProductList items={productsArr}></ProductList>
     <Footer></Footer>
     {cartSate&& <Cart items={productsArr}></Cart>}
     
    </Card>
  );
}

export default App;
