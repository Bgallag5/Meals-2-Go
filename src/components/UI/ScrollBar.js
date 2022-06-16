import React, { useRef } from "react";

export default function ScrollBar() {
  const scrollBarRef = useRef("");
  //get max window scroll
  const handleScroll = () => {
    // console.log(scrollBarRef.current);
    if (!scrollBarRef.current) return
    // console.log(scrollBarRef.current);
    const bodyEl = document.querySelector(".app-container");

    //offset - height of viewport (height of what is on screen)
    let offset = window.innerHeight;
    //maxScroll - max we CAN scroll, so total body height - viewport height
    let maxScroll = bodyEl.scrollHeight - offset;
    //currentScroll - how far below top (0) we have scrolled
    let currentScroll = window.scrollY;

    //toggle scrollbar visibility if currentScroll is below 0
    if (currentScroll > 0) {
      scrollBarRef.current.style.visibility = "visible";
    }
    if (currentScroll <= 0) {
      scrollBarRef.current.style.visibility = "hidden";
    }

    //set width of scrollbar to currentScroll/maxScroll;
    const scrollValue = `${(currentScroll / maxScroll) * 100}%`;
    scrollBarRef.current.style.width = scrollValue;
  };
  //listen for scroll
  document.addEventListener("scroll", handleScroll);

  return <div ref={scrollBarRef} className="header__scrollbar"></div>;
}
