import React, { useContext, useReducer } from "react";
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

//create provider
const Provider = (props) => {
  const [state, dispatch] = useReducer(reducer, preLoadedState);

  const addItem = (item, quantity) => {
    dispatch({ type: "ADD_TO_CART", payload: {item, quantity} });
  };
  const removeItem = () => {};


  //full state context passed into our context provider
  const contextValue = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem,
    removeItem,
    availableMeals: meals,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default Provider;
