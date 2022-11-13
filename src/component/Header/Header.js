import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import Button from "../../UI/Button/Button";
import CartContext from "../../Context/CartContext";
import LogOut from "../LoginPage/LogOut";

const Header = (props) => {
  const ctx = useContext(CartContext);

  let count = 0;
  ctx.items.map((item) => {
    // console.log(item);
    count += item.quantity;
    // console.log(count);
  });
  const cartHandler = () => {
    props.cartHandler();
    console.log("cart handler ");
  };
  return (
    <div>
      <header className={classes.header}>
        <span>Ecommerce website</span>
        {ctx.loginState && (
          <NavLink to="/Home">
            <span>Home</span>
          </NavLink>
        )}
        {!ctx.loginState && (
          <NavLink to="/login">
            <span className={classes.login}>Login</span>
          </NavLink>
        )}

        {ctx.loginState && (
          <NavLink to="/Store" activeClassName={classes.active}>
            <span>Store</span>
          </NavLink>
        )}

        {/* <NavLink to="/login" activeClassName={classes.active}>
            <span className={classes.login}>Login</span>
          </NavLink> */}

        {/* { <Button name="logout" className={classes.logout}></Button>} */}
        {/* {ctx.loginStatus && (
          <NavLink to="" activeClassName={classes.active}>
            <span>Logout</span>
          </NavLink>
        )} */}
        {ctx.loginState && (
          <NavLink to="/About" activeClassName={classes.active}>
            <span>About</span>
          </NavLink>
        )}
        {ctx.loginState && (
          <NavLink to="/contactus" activeClassName={classes.active}>
            <span>Contact Us</span>
          </NavLink>
        )}
        {ctx.loginState && (
          <LogOut name="logout" className={classes.logout}></LogOut>
        )}
        {ctx.loginState && (
          <div className={classes.btn}>
            <Button
              onClick={cartHandler}
              name="Cart"
              className={classes.cartbtn}
            ></Button>
            <div className={classes.amt}>
              <h2>{count}</h2>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
