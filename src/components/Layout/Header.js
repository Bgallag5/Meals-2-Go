import React, { useContext, useRef, useEffect } from "react";
import { AppContext } from "../../App";
import { GlobalContext } from "../../store/GlobalStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import AppMessage from "../UI/AppMessage";
import ScrollBar from "../UI/ScrollBar";
import { NavLink, Link, useNavigate } from "react-router-dom";

export default function Header() {
  const { handleToggleModal } = useContext(AppContext);
  const { items, appMessage, availableMeals, user, logout } = useContext(GlobalContext);
  const cartButtonRef = useRef();
  const navigate = useNavigate();

  //when items are added/removed add className 'ripple' for 1 second
  useEffect(() => {
    if (items.length <= 0) return;
    //remove ripple in case click twice within 1 second
    cartButtonRef.current.classList.remove("ripple");
    cartButtonRef.current.classList.add("ripple");

    setTimeout(() => {
      cartButtonRef.current.classList.remove("ripple");
    }, 1500);
  }, [items]);

  const handleLogout = () => {
    logout();
    navigate('/menu');
  }

  console.log(user);
  console.log(items);
  return (
    <>
      {appMessage?.msg && <AppMessage />}
      <div className="header flex-col">
        <header className="header__main flex-row">
          <NavLink to={"/menu"}>
            <h1 className="header__main--title">Meals-2-Go</h1>
          </NavLink>
          <h2>{user && user.email}</h2>
          {/* <Link to={'/login'}>Login</Link> */}
          <button onClick={handleLogout}>Logout</button>
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
