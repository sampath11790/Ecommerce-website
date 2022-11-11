import React, { useState } from "react";
import { Route } from "react-router-dom";
import Header from "./component/Header/Header";
import ProductList from "./component/ListItem/ProductList";
import Footer from "./component/Footer/Footer";
import Cart from "./component/cart/Cart";
// import Card from "./UI/Card/Card";
import AboutPage from "../src/AboutPage/AboutPage";
import CartContextProvider from "./Context/CartContextProvider";
import HomePage from "./component/Home/HomePage";
import ContactUs from "./component/contact us page/ContactUs";
import FirstItem from "./component/ListItem/firstItem/FirstItem";

const productsArr = [
  {
    id: 1,
    title: "Men Slim Fit Casual Shirt Black colour",
    price: 100,

    imageUrl: [
      "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/g/9/p/s-black-5-jai-textiles-original-imag42m5hcfue7np-bb.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/832/832/kpydrbk0/shirt/z/k/b/s-black-5-jai-textiles-original-imag42m5qhjdsqzf.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/832/832/kplisnk0/shirt/2/l/c/xl-plain4-neelkanth-enterprise-original-imag3smsn2fgzusj.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/832/832/kplisnk0/shirt/e/g/e/xl-plain4-neelkanth-enterprise-original-imag3smsbfwyd5er.jpeg?q=70",
    ],
  },
  {
    id: 2,
    title: "Men Slim Fit  Casual Shirt pink colour",
    price: 800,
    imageUrl: [
      "https://rukminim1.flixcart.com/image/832/832/jzzvs7k0/shirt/h/a/h/l-c301-dustypink-dennis-lingo-original-imafjvx7b9jguhdv.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/832/832/jzzvs7k0/shirt/h/a/h/l-c301-dustypink-dennis-lingo-original-imafjvx7gh2yfzrf.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/832/832/jzzvs7k0/shirt/h/a/h/l-c301-dustypink-dennis-lingo-original-imafjvx7wsax4bfp.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/832/832/jzzvs7k0/shirt/h/a/h/l-c301-dustypink-dennis-lingo-original-imafjvx7c68n7vdz.jpeg?q=70",
    ],
  },
  {
    id: 3,
    title: "Solid Men Round Neck Blue T-Shirt",
    price: 1250,
    imageUrl: [
      "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/b/c/k/m-cz-den-ch-01-cazzba-original-imagb65y8ftrgrgs-bb.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/832/832/kz3118w0/shirt/x/k/f/m-cz-den-ch-01-cazzba-original-imagb65ym3qpka5t.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/832/832/kz3118w0/shirt/6/a/o/m-cz-den-ch-01-cazzba-original-imagb65y9yk5htup.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/832/832/kz3118w0/shirt/a/v/a/m-cz-den-ch-01-cazzba-original-imagb65yfr7jhwgw.jpeg?q=70",
    ],
  },
  {
    id: 4,
    title: "Men Regular  Mandarin Collar  Shirt",
    price: 1800,
    imageUrl: [
      "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/b/a/n/xl-cz-den-ch-01-cazzba-original-imagb65ya7hw26bb-bb.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/832/832/kz3118w0/shirt/p/y/h/xl-cz-den-ch-01-cazzba-original-imagb65yhh9ceuyg.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/832/832/kz3118w0/shirt/v/x/i/xl-cz-den-ch-01-cazzba-original-imagb65ycpqwuhzh.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/832/832/kz3118w0/shirt/x/8/n/xl-cz-den-ch-01-cazzba-original-imagb65y3skspwth.jpeg?q=70",
    ],
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
      <Route path="/Store" exact>
        <ProductList items={productsArr}></ProductList>
      </Route>
      <Route path="/Store/:id" exact>
        <FirstItem items={productsArr}></FirstItem>
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
