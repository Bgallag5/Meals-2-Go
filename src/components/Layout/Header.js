import React, {useContext} from "react";
import { AppContext } from "../../App";

export default function Header() {

    const {handleToggleModal } = useContext(AppContext);

  return (
    <>
      <div className="header flex-col">
        <header className="header__main flex-row">
          <h1 className="header__main--title">Meals-2-Go</h1>
          <button onClick={handleToggleModal} className="header__main--cart btn flex-row ">
            <p className="text-regular">Cart</p> 
            <div className="header__main--cart--items flex-row">0</div>
          </button>
        </header>
      </div>
      <div className="header__img"></div>
    </>
  );
}
