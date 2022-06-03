import React, {useRef, useState} from "react";
import Provider from "./store/GlobalStore";

//components
import Header from "./components/Layout/Header";
import Menu from "./components/Layout/Menu";
import Cart from "./components/Cart/Cart";

export const AppContext = React.createContext();

function App() {

  const modalRef = useRef();
  const modalContainerRef = useRef();


  //create and move main state logic into store/context
  //searchbar for meals?

  const handleClickOffModal = (e) => {
      console.log( 'CLICKED!!!');
      //if user click inside the cart modal, return do nothing 
      if (modalRef.current.contains(e.target)) return 

      else if (!modalRef.current.contains(e.target)){
          modalContainerRef.current.classList.add('hidden')
      }
  }

  const handleToggleModal = () => {
    modalContainerRef.current.classList.toggle('hidden');
  }

  const handleCloseModal = () => {
    modalContainerRef.current.classList.toggle('hidden');
  }

  const globalVars = {
    modalRef,
    modalContainerRef,
    handleCloseModal,
    handleToggleModal,
    handleClickOffModal
  }

  return (
    <Provider>
    <AppContext.Provider value={globalVars}>
    <div>
      <Cart />
      <Header />
      <Menu />
    </div>
    </AppContext.Provider>
    </Provider>
  );
}

export default App;



/*

redux state and dispatch hooks 
import { useDispatch, useSelector } from "react-redux";

export default function Overview() {
  const state = useSelector(state => state);
  const { tours } = state;
  const dispatch = useDispatch();



//page navigation hook
import { useNavigate } from 'react-router-dom';

*/