import { createContext } from "react";

const CartContext = createContext({
  items: [],
  HomePageItem: [],
  addItem: () => {},
  RemoveItem: (id) => {},
  loginToken: "",
  loginState: null,
  login: () => {},
  logout: () => {},
  addCrudData: () => {},
});

export default CartContext;
