import React, { useReducer   } from "react";
import { reducer } from "./reducers";
import meals from "../data/dummy-data";

//create context
export const GlobalContext = React.createContext();

//default preloaded state (state needed on the first load)
const preLoadedState = {
  items: [],
  totalAmount: 0,
  availableMeals: meals,
  user: {
    isLoggedIn: false,
    email: undefined,
    idToken: undefined,
  },
  appMessage: {
    msg: undefined,
    timer: undefined,
    color: undefined,
    emoji: undefined,
  },
};

//create and export context provider JSX element
const Provider = (props) => {
  //global state declared as a reducer
  const [state, dispatch] = useReducer(reducer, preLoadedState);

  //ACTION DISPATCH
  const setAppMessage = ({ msg, color, timer, emoji }) => {
    dispatch({
      type: "SET_APP_MESSAGE",
      payload: { msg, color, timer, emoji },
    });
  };
  const clearAppMessage = () => {
    dispatch({ type: "CLEAR_APP_MESSAGE" });
  };
  //add item and it's quantity to the cart
  const addItem = (item, quantity) => {
    dispatch({ type: "ADD_TO_CART", payload: { item, quantity } });
    setAppMessage({
      msg: "Item added to cart",
      color: "green",
      timer: 1.5,
      emoji: item.emoji || "",
    });
  };

  //reduce cartItem quantity by 1
  const reduceItem = (cartItem) => {
    //reduce the number of the item by 1
    dispatch({ type: "REDUCE_ITEM", payload: cartItem });
    setAppMessage({
      msg: "Item Removed",
      color: "red",
      timer: 1,
      emoji: `❗️`,
    });
  };

  //remove entire item object from the store state
  const removeItem = (item) => {
    dispatch({ type: "REMOVE_ITEM", payload: item });
    setAppMessage({
      msg: "Removed From Cart",
      color: "red",
      timer: 1,
      emoji: `❗️`,
    });
  };

  const login = (user) => {
    setAuthToken(user);
    dispatch({ type: "LOGIN_USER", payload: user });
    // setAppMessage({ msg: `Welcome ${user.email}`, timer: 1, emoji: "❗️" });
  };

  const logout = (user) => {
    clearAuthToken();
    dispatch({ type: "LOGOUT_USER" });
    setAppMessage({ msg: `Logout Successful`, timer: 1.5, emoji: "❗️" });
  };

  //HELPER FUNCITONS:
  const checkAuthToken = () => {
    //push to LS
    // const authToken = JSON.parse(localStorage.getItem("authToken"));
    const user = JSON.parse(localStorage.getItem("mealsAuthToken"));
    console.log(user);
    return user;
  };

  const setAuthToken = (user) => {
    //set LS Auth token
    console.log(user);
    localStorage.setItem("mealsAuthToken", JSON.stringify(user));
  };

  const clearAuthToken = (token) => {
    localStorage.removeItem('mealsAuthToken')
  }

  // const checkExpiration = (token) => {

  // }

  //full state context passed into our context provider
  //(we pass in state variables from our reducer, so that interacting with those vars through context hits our global state)
  const contextValue = {
    //state variables
    items: state.items,
    totalAmount: state.totalAmount,
    availableMeals: meals,
    appMessage: state.appMessage,
    user: state.user,
    //global state functions
    addItem,
    removeItem,
    reduceItem,
    setAppMessage,
    clearAppMessage,
    login,
    logout,
    checkAuthToken,
    setAuthToken,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default Provider;
