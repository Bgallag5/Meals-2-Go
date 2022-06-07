import React, { useReducer } from "react";
import { reducer } from "./reducers";
import meals from "../data/dummy-data";

//create context
export const GlobalContext = React.createContext();

//default preloaded state (state needed on the first load)
const preLoadedState = {
  items: [],
  totalAmount: 0,
  availableMeals: meals,
  appMessage: {
    msg: undefined,
    timer: undefined,
    color: undefined,
    emoji: undefined,
  },
};

//create and export provider JSX element
const Provider = (props) => {
  //global state declared as a reducer
  const [state, dispatch] = useReducer(reducer, preLoadedState);

  const setAppMessage = ({ msg, color, timer }) => {
    dispatch({ type: "SET_APP_MESSAGE", payload: { msg, color, timer } });
  };
  const clearAppMessage = () => {
    dispatch({ type: "CLEAR_APP_MESSAGE" });
  };
  //add item and it's quantity to the cart
  const addItem = (item, quantity) => {
    dispatch({ type: "ADD_TO_CART", payload: { item, quantity } });
    setAppMessage({ msg: "Item added to cart", color: "green", timer: 2000 });
  };

  const reduceItem = (cartItem) => {
    //reduce the number of the item by 1
    dispatch({ type: "REDUCE_ITEM", payload: cartItem });
  };

  //remove entire item object from the store state
  const removeItem = () => {};

  //full state context passed into our context provider
  //(we pass in state variables from our reducer, so that interacting with those vars through context hits our global state)
  const contextValue = {
    //state variables
    items: state.items,
    totalAmount: state.totalAmount,
    availableMeals: meals,
    appMessage: state.appMessage,
    //global functions
    addItem,
    removeItem,
    reduceItem,
    setAppMessage,
    clearAppMessage,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default Provider;
