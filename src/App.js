import React, { useRef, useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Provider, { GlobalContext } from "./store/GlobalStore";

//components
import Header from "./components/Header/Header";
import Menu from "./components/Layout/Menu";
import Checkout from "./components/Layout/Checkout/Checkout";
import SingleItemView from "./components/Layout/SingleItemView";
import SignUp from "./components/Layout/SignUp";
import Login from "./components/Layout/Login";
import NoRouteMatch from "./components/UI/NoRouteMatch";

export const AppContext = React.createContext();

function App() {
  const {user, checkAuthToken, login} = useContext(GlobalContext);
  const modalRef = useRef();
  const modalContainerRef = useRef();

  const params = useParams();
  console.log(params);

  //close cart modal on click outside modal
  const handleClickOffModal = (e) => {
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

  //check for returning user, login that user
  useEffect(() => {
    const returningUser = checkAuthToken();
    if(returningUser){
      login(returningUser)
    }
  }, []);

    //scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // <Provider>
      <AppContext.Provider value={globalVars}>
        <div className="app-container">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route exact path={"/"} element={<Menu />} />
              <Route exact path={"/signup"} element={<SignUp />} />
              <Route path={"/login"} element={<Login />} />
              <Route path={"/menu-item/:itemId"} element={<SingleItemView />} />
              <Route path={"/checkout"} element={user.isLoggedIn ? <Checkout /> : <Navigate to={'/'} />} />
              <Route path="*" element={<NoRouteMatch />} /> 
            </Routes>
          </BrowserRouter>
        </div>
      </AppContext.Provider>
    // </Provider>
  );
}

export default App;
