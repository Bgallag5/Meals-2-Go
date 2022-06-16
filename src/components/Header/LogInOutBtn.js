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
        <button onClick={handleLogout}>Logout</button>
      ) : (
          <button><NavLink to={"/login"}>Login</NavLink></button>
        
      )}
    </>
  );
}
