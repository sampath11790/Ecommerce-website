import React, { useRef, useContext, useEffect, useState } from "react";
import Button from "../../UI/Button/Button";
import classes from "./LoginPage.module.css";
import CartContext from "../../Context/CartContext";
import { useHistory } from "react-router-dom";
import useApi from "../../CustomHook/useApi";
const loginURL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDLrtmB6x-_BTeBTGkfoMMg-KYKF4ODaiw";
const signupUrl =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDLrtmB6x-_BTeBTGkfoMMg-KYKF4ODaiw";
const LoginPage = () => {
  const { data, loading, error, fetchdata } = useApi();
  const [toggle, settoggle] = useState(false);
  const enteredEmail = useRef(null);
  const enteredPassword = useRef(null);
  const ctx = useContext(CartContext);
  const history = useHistory();
  const toggleHandler = () => {
    settoggle(!toggle);
  };
  // useEffect(() => {
  //   console.log("redndering");
  // }, [data]);
  const LoginHandler = async (event) => {
    event.preventDefault();
    try {
      const loginObj = {
        email: enteredEmail.current.value,
        password: enteredPassword.current.value,
        returnSecureToken: true,
      };
      let data;
      //calling returned useapi function
      if (toggle == false) {
        data = await fetchdata(loginURL, loginObj);
      }
      if (toggle == true) {
        data = await fetchdata(signupUrl, loginObj);
      }
      //verifying returned value
      if (data.error) {
        console.log("error page");

        throw new Error(data.error.message);
      } else {
        ctx.login({ idToken: data.idToken, email: data.email });
        history.replace("/Store");
        //console.log(data.idToken);
      }
    } catch (error) {
      //consonsole.log(error.message);
      alert(error.message);
    }
  };
  return (
    <>
      <div className={classes["main-page"]}>
        {loading && <p>loading.....</p>}
        {!loading && (
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
            <Button
              className={classes.btn}
              name={!toggle ? "Login" : "Signup"}
            ></Button>
            <h3 className={classes.toggle} onClick={toggleHandler}>
              {!toggle ? "Signup" : "Login"}
            </h3>
          </form>
        )}
      </div>
    </>
  );
};

export default LoginPage;
