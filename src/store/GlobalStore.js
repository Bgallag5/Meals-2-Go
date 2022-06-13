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

  const setAppMessage = ({ msg, color, timer, emoji }) => {
    dispatch({ type: "SET_APP_MESSAGE", payload: { msg, color, timer, emoji } });
  };
  const clearAppMessage = () => {
    dispatch({ type: "CLEAR_APP_MESSAGE" });
  };
  //add item and it's quantity to the cart
  const addItem = (item, quantity) => {
    dispatch({ type: "ADD_TO_CART", payload: { item, quantity } });
    setAppMessage({ msg: "Item added to cart", color: "green", timer: 1.5, emoji: item.emoji || '' });
  };

  //reduce cartItem quantity by 1 
  const reduceItem = (cartItem) => {
    //reduce the number of the item by 1
    dispatch({ type: "REDUCE_ITEM", payload: cartItem });
    setAppMessage({ msg: "Item Removed", color: "red", timer: 1, emoji: `❗️` });
  };

  //remove entire item object from the store state
  const removeItem = (item) => {
    dispatch({ type: "REMOVE_ITEM", payload: item });
    setAppMessage({ msg: "Removed From Cart", color: "red", timer: 1, emoji: `❗️` });
  };

  //full state context passed into our context provider
  //(we pass in state variables from our reducer, so that interacting with those vars through context hits our global state)
  const contextValue = {
    //state variables
    items: state.items,
    totalAmount: state.totalAmount,
    availableMeals: meals,
    appMessage: state.appMessage,
    //global state functions
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



// import { configureStore } from "@reduxjs/toolkit";
// import { Provider } from "react-redux";
// import { combineReducers } from "redux";

// import cart from "./reducers/cart";

// const preLoadedState = {
//   user: "Ben",
//   cartItems: [],
//   cartVisible: false,
//   cart: cart
// };

// console.log(cart);

// const combinedReducers = combineReducers({
//   cart: cart.reducer,
// });

// const store = configureStore({
//   reducer: combinedReducers,
//   preloadedState: preLoadedState,
// });

// const StoreProvider = (props) => {
//   return <Provider store={store}></Provider>;
// };

// export { store, StoreProvider };