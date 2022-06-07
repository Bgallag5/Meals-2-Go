import React, { useRef, useState, useContext } from "react";
// import Provider from "./store/GlobalStore";

//components
import Header from "./components/Layout/Header";
import Menu from "./components/Layout/Menu";
import Cart from "./components/Cart/Cart";
import AppMessage from './components/UI/AppMessage';
import Provider, { GlobalContext  } from "./store/GlobalStore";

export const AppContext = React.createContext();

function App() {
  const state = useContext(GlobalContext);
  console.log(state);

  const modalRef = useRef();
  const modalContainerRef = useRef();

  const handleClickOffModal = (e) => {
    console.log("CLICKED!!!");
    //if user click inside the cart modal, return do nothing
    if (modalRef.current.contains(e.target)) return;
    else if (!modalRef.current.contains(e.target)) {
      modalContainerRef.current.classList.add("hidden");
    }
  };

  const handleToggleModal = () => {
    modalContainerRef.current.classList.toggle("hidden");
  };

  const handleCloseModal = () => {
    modalContainerRef.current.classList.toggle("hidden");
  };

  const globalVars = {
    modalRef,
    modalContainerRef,
    handleCloseModal,
    handleToggleModal,
    handleClickOffModal,
  };

  //regex get number from price string
  // console.log(('$17.99').replace(/[^\d.-]/g, ''));

  return (
    <Provider>
      <AppContext.Provider value={globalVars}>
        <div>
          {/* {state && <AppMessage />} */}
          <Cart />
          <Header />
          <Menu />
        </div>
      </AppContext.Provider>
    </Provider>
  );
}

export default App;
