import React, {useContext} from "react";
import { AppContext } from "../../App";
import { GlobalContext } from "../../store/GlobalStore";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping, } from "@fortawesome/free-solid-svg-icons";

export default function Header() {

    const {handleToggleModal } = useContext(AppContext);

    const {items} = useContext(GlobalContext);

  return (
    <>
      <div className="header flex-col">
        <header className="header__main flex-row">
          <h1 className="header__main--title">Meals-2-Go</h1>
          <button onClick={handleToggleModal} className="header__main--cart btn flex-row ">
              <FontAwesomeIcon icon={faCartShopping} />
            <p className="text-regular">Cart</p> 
            <div className="header__main--cart--items flex-row">{items.reduce((acc, cur) => acc + cur.quantity, 0)}</div>
          </button>
        </header>
      </div>
      <div className="header__img"></div>
    </>
  );
}
