import React, {useContext, useEffect, useRef, useState} from "react";
import { AppContext } from "../../App";
import { GlobalContext } from "../../store/GlobalStore";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping, } from "@fortawesome/free-solid-svg-icons";

import AppMessage from "../UI/AppMessage";

export default function Header() {

    const {handleToggleModal } = useContext(AppContext);
    const {items, appMessage } = useContext(GlobalContext);

    // const [currentScroll, setCurrentScroll] = useState(0);
    const scrollBarRef = useRef('0%');
    
    
    //get max window scroll
    const handleScroll = () => {
        const bodyEl = document.querySelector('.app-container')

        //offset - height of viewport (height of what is on screen)
        let offset = window.innerHeight;
        //maxScroll - max we CAN scroll, so total body height - viewport height
        let maxScroll = bodyEl.scrollHeight - offset;
        //currentScroll - how far below top (0) we have scrolled
        let currentScroll = window.scrollY;

        // console.log(offset);
        console.log( 'MAX SCROLL:', maxScroll);
        console.log( 'CURRENT:', currentScroll);



        //set width of scrollbar to currentScroll/maxScroll;
        // let currentScroll = (maxScroll / window.scrollY);
        console.dir(scrollBarRef);
        const scrollValue = `${(currentScroll / maxScroll) * 100}%` ;
        console.log(scrollValue);
        scrollBarRef.current.style.width = scrollValue;


    }
    document.addEventListener('scroll', handleScroll);



  return (
    <>
    {appMessage?.msg && <AppMessage />}
      <div className="header flex-col">
        <header className="header__main flex-row">
          <h1 className="header__main--title">Meals-2-Go</h1>
          <button onClick={handleToggleModal} className="header__main--cart btn flex-row ">
              <FontAwesomeIcon icon={faCartShopping} />
            <p className="text-regular">Cart</p> 
            <div className="header__main--cart--items flex-row">{items.reduce((acc, cur) => acc + cur.quantity, 0)}</div>
          </button>
        </header>
          <div ref={scrollBarRef} className="header__scrollbar"></div>
      </div>
      <div className="header__img"></div>
    </>
  );
}
