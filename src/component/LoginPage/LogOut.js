import React, { useContext } from "react";
import Button from "../../UI/Button/Button";
import CartContext from "../../Context/CartContext";
import { useHistory } from "react-router-dom";

const LogOut = (props) => {
  const history = useHistory();
  const ctx = useContext(CartContext);
  const logoutHandler = () => {
    ctx.logout();
    history.replace("/login");
  };
  return (
    <div>
      <Button
        name={props.name}
        className={props.className}
        onClick={logoutHandler}
      ></Button>
    </div>
  );
};
export default LogOut;
