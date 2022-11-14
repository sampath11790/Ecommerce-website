import React, { useRef, useContext } from "react";
import Button from "../../UI/Button/Button";
import classes from "./LoginPage.module.css";
import CartContext from "../../Context/CartContext";
import { useHistory } from "react-router-dom";
const LoginPage = () => {
  const enteredEmail = useRef(null);
  const enteredPassword = useRef(null);
  const ctx = useContext(CartContext);
  const history = useHistory();

  const LoginHandler = async (event) => {
    event.preventDefault();
    try {
      const loginObj = {
        email: enteredEmail.current.value,
        password: enteredPassword.current.value,
        returnSecureToken: true,
      };
      // console.log(loginObj);
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBfgANxrAz4GiGlY8rVOTnzXdsyhltW2vA",
        {
          method: "POST",
          body: JSON.stringify(loginObj),
          Headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      if (data.error) {
        console.log("error page");

        throw new Error(data.error.message);
      } else {
        ctx.login(data.idToken);
        history.replace("/Store");
        //console.log(data.idToken);
      }
    } catch (error) {
      //consonsole.log(error.message);
      alert(error.message);
    }
  };
  return (
    <div className={classes["main-page"]}>
      <form className={classes["container"]} onSubmit={LoginHandler}>
        <div className={classes["profile-img"]}>
          <img
            src="https://yt3.ggpht.com/ytc/AMLnZu9UmunKtiD3L-xo9N5mNkkmdVnrdCd_KAbU0HBl=s900-c-k-c0x00ffffff-no-rj"
            alt="sticker"
          />
        </div>
        <h1>Welcome</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <h6> please Login To Enter </h6>
        <label>User Name</label>
        <input type="email" ref={enteredEmail}></input>
        <label>password</label>
        <input type="password" ref={enteredPassword}></input>
        <Button className={classes.btn} name="Login"></Button>
      </form>
    </div>
  );
};

export default LoginPage;
