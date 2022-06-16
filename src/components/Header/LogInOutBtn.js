import React, { useContext, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../store/GlobalStore";

//login/logout button: if no user, btn navigates to login page. if user, btn dispatches logout
export default function LogInOutBtn({ handleLogout }) {
  const { user } = useContext(GlobalContext);
  //   const authPath = user.isLoggedIn ? 'logout' : 'login'
  console.log(user);
  return (
    <>
      {user.isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <NavLink to={"/login"}>Login</NavLink>
      )}
    </>
  );
}
