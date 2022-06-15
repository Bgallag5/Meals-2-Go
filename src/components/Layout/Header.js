import React, { useContext, useRef, useEffect } from "react";
import { AppContext } from "../../App";
import { GlobalContext } from "../../store/GlobalStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import AppMessage from "../UI/AppMessage";
import ScrollBar from "../UI/ScrollBar";
import { NavLink } from "react-router-dom";

export default function Header() {
  const { handleToggleModal } = useContext(AppContext);
  const { items, appMessage, availableMeals } = useContext(GlobalContext);
  const cartButtonRef = useRef();

  //when items are added/removed add className 'ripple' for 1 second
  useEffect(() => {
    console.log(items);
    if ( items.length <= 0 ) return
      //remove ripple in case click twice within 1 second 
    cartButtonRef.current.classList.remove('ripple')
    cartButtonRef.current.classList.add('ripple');

    setTimeout(() => {
        cartButtonRef.current.classList.remove('ripple')
    }, 1500)
  }, [items]);
console.log(appMessage);

  return (
    <>
      {appMessage?.msg && <AppMessage />}
      <div className="header flex-col">
        <header className="header__main flex-row">
          <NavLink to={"/menu"}>
            <h1 className="header__main--title">Meals-2-Go</h1>
            <h1>{appMessage?.msg}</h1>
          </NavLink>
          <button
          ref={cartButtonRef}
          disabled={!items.length > 0}
            onClick={handleToggleModal}
            className="header__main--cart btn flex-row "
          >
            <FontAwesomeIcon icon={faCartShopping} />
            <p className="text-regular">Cart</p>
            <div className="header__main--cart--items flex-row">
              {items.reduce((acc, cur) => acc + cur.quantity, 0)}
            </div>
          </button>
        </header>
        <div className="scrollbar-container">
          <ScrollBar />
        </div>
      </div>
      <div className="header__img"></div>
    </>
  );
}
