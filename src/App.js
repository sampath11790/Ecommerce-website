import React, { useState } from "react";
import { Route } from "react-router-dom";
import Header from "./component/Header/Header";
import ProductList from "./component/ListItem/ProductList";
import Footer from "./component/Footer/Footer";
import Cart from "./component/cart/Cart";
import Card from "./UI/Card/Card";
import AboutPage from "../src/AboutPage/AboutPage";
import CartContextProvider from "./Context/CartContextProvider";
import HomePage from "./component/Home/HomePage";
import ContactUs from "./component/contact us page/ContactUs";

const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

function App() {
  const [cartState, setcartState] = useState(false);

  const CartHandler = () => {
    console.log("state Handler");
    setcartState(!cartState);
  };
  return (
    <CartContextProvider>
      <Header cartHandler={CartHandler}></Header>

      <Route path="/About">
        <AboutPage></AboutPage>
      </Route>
      <Route path="/Store">
        <ProductList items={productsArr}></ProductList>
      </Route>
      {/* <HomePage></HomePage> */}
      <Route path="/Home">
        <HomePage></HomePage>
      </Route>
      <Route path="/contactus">
        <ContactUs></ContactUs>
      </Route>
      <Footer></Footer>
      {cartState && <Cart items={productsArr}></Cart>}
    </CartContextProvider>
  );
}

export default App;
