import React, { useState, useContext, Suspense } from "react";
import { Route, Redirect } from "react-router-dom";
import ProductList from "./component/ListItem/ProductList";
import Cart from "./component/cart/Cart";
import FirstItem from "./component/ListItem/firstItem/FirstItem";
import CartContext from "./Context/CartContext";
const Header = React.lazy(() => import("./component/Header/Header"));
const Footer = React.lazy(() => import("./component/Footer/Footer"));
const HomePage = React.lazy(() => import("./component/Home/HomePage"));
const ContactUs = React.lazy(() =>
  import("./component/contact us page/ContactUs")
);
const LoginPage = React.lazy(() => import("./component/LoginPage/LoginPage"));
const AboutPage = React.lazy(() => import("../src/AboutPage/AboutPage"));
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
  const ctx = useContext(CartContext);
  const tooglebtn = () => {
    ctx.toggle();
  };
  const CartHandler = () => {
    console.log("state Handler");
    setcartState(!cartState);
  };

  return (
    <React.Fragment>
      <Suspense fallback={<p className="loading">Loading .....</p>}>
        <Header cartHandler={CartHandler}></Header>
        <div className="menubtn" onClick={tooglebtn}>
          <img
            src="https://www.pngkey.com/png/detail/200-2004537_menu-button-clip-art-positive-clip-art.png"
            alt="Menu Button Clip Art - Positive Clip Art@pngkey.com"
          />
        </div>
        {/* login condition added */}

        {!ctx.loginState ? (
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
        ) : (
          <div>
            <Route path="/About">
              <AboutPage></AboutPage>
            </Route>
            <Route path="/Store" exact>
              <ProductList items={productsArr}></ProductList>
            </Route>
            <Route path="/Store/:id">
              <FirstItem items={productsArr}></FirstItem>
            </Route>
            {/* <HomePage></HomePage> */}
            <Route path="/Home">
              <HomePage></HomePage>
            </Route>
            <Route path="/login">
              <LoginPage></LoginPage>
            </Route>
            <Route path="/contactus">
              <ContactUs></ContactUs>
            </Route>
          </div>
        )}
        {/* {Redirect path mentioned} */}
        <Route path="*">{!ctx.loginState && <Redirect to="/login" />}</Route>
        {ctx.loginState && <Footer></Footer>}
        {cartState && (
          <Cart items={productsArr} cartHandler={CartHandler}></Cart>
        )}
      </Suspense>
    </React.Fragment>
  );
}

export default App;
