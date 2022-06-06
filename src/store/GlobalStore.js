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
};

//create and export provider JSX element
const Provider = (props) => {
  //global state declared as a reducer
  const [state, dispatch] = useReducer(reducer, preLoadedState);

  //add item and it's quantity to the cart
  const addItem = (item, quantity) => {
    dispatch({ type: "ADD_TO_CART", payload: { item, quantity } });
  };

  const reduceItem = (cartItem) => {
    //reduce the number of the item by 1
    dispatch({ type: "REDUCE_ITEM", payload: cartItem  });

  };

  //remove entire item object from the store state
  const removeItem = () => {};

  //full state context passed into our context provider
  //(we pass in state variables from our reducer, so that interacting with those vars through context hits our global state)
  const contextValue = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem,
    removeItem,
    reduceItem,
    availableMeals: meals,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default Provider;
