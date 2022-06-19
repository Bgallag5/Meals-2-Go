import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../store/GlobalStore";

//login/logout button: if no user, btn navigates to login page. if user, btn dispatches logout
export default function LogInOutBtn({ handleLogout }) {
  const { user } = useContext(GlobalContext);
  console.log(user);
  return (
    <>
      {user.isLoggedIn ? (
        <button className="header__btn header__btn--logout btn text-small" onClick={handleLogout}>Logout</button>
      ) : (
          <button className="header__btn header__btn--login btn text-small"><NavLink to={"/login"}>Login</NavLink></button>
        
      )}
    </>
  );
}
