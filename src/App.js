import React from "react";
import Header from "./component/Header/Header";
import ProductList from "./component/ListItem/ProductList";
import Footer from "./component/Footer/Footer";


const productsArr = [

  {id:1,title: 'Colors',price: 100,imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',},
  {id:2,title: 'Black and white Colors', price: 50,imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',},
  {id:3,title: 'Yellow and Black Colors',price: 70,imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',},
  {id:4,title: 'Blue Color',price: 100,imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',}
  
  ]
  
  
function App() {
  return (
    <div>
      <Header></Header>
     <ProductList items={productsArr}></ProductList>
     <Footer></Footer>
     
    </div>
  );
}

export default App;
