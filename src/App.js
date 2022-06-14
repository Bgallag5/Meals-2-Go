import React, { useRef, useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import {useParams} from 'react-router-dom';

//components
import Header from "./components/Layout/Header";
import Menu from "./components/Layout/Menu";
import Checkout from "./components/Layout/Checkout/Checkout";
import Provider, { GlobalContext } from "./store/GlobalStore";
import SingleItemView from './components/Layout/SingleItemView';

export const AppContext = React.createContext();

function App() {
  const state = useContext(GlobalContext);
  const modalRef = useRef();
  const modalContainerRef = useRef();

  const params = useParams();
  console.log(params);

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
              <Route exact path={"/"}  element={<Navigate to={'/menu'} />}/>
              <Route exact path={"/menu"} element={<Menu />} />
              <Route path={"/menu-item/:itemId"} element={<SingleItemView />} />
              <Route path={"/checkout"} element={<Checkout />} />
            </Routes>
          </BrowserRouter>
        </div>
      </AppContext.Provider>
    </Provider>
  );
}

export default App;
