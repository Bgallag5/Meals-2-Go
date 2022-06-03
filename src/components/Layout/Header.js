import React, {useContext} from "react";
import { AppContext } from "../../App";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";

export default function Header() {

    const {handleToggleModal } = useContext(AppContext);

  return (
    <>
      <div className="header flex-col">
        <header className="header__main flex-row">
          <h1 className="header__main--title">Meals-2-Go</h1>
          <button onClick={handleToggleModal} className="header__main--cart btn flex-row ">
              <FontAwesomeIcon icon={faCartShopping} />
            <p className="text-regular">Cart</p> 
            <div className="header__main--cart--items flex-row">0</div>
          </button>
        </header>
      </div>
      <div className="header__img"></div>
    </>
  );
}
