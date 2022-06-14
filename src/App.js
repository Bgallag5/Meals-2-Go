import React, { useRef, useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//components
import Header from "./components/Layout/Header";
import Menu from "./components/Layout/Menu";
import Checkout from "./components/Layout/Checkout/Checkout";
import Provider, { GlobalContext } from "./store/GlobalStore";

export const AppContext = React.createContext();

function App() {
  const state = useContext(GlobalContext);
  const modalRef = useRef();
  const modalContainerRef = useRef();

  //close cart modal on click outside modal
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

  //scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Provider>
      <AppContext.Provider value={globalVars}>
        <div className="app-container">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path={"/"} element={<Menu />} />
              <Route path={"/checkout"} element={<Checkout />} />
            </Routes>
          </BrowserRouter>
        </div>
      </AppContext.Provider>
    </Provider>
  );
}

export default App;
