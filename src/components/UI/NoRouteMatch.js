import React from "react";
import { NavLink } from "react-router-dom";

export default function NoRouteMatch() {
  return (
    <div className="flex-col jcsb">
      <h2>Oops! How'd you end up here?</h2>
      <h4>
        <NavLink to={'/'} className={"link"}>Take me Home!</NavLink>{" "}
      </h4>
    </div>
  );
}
