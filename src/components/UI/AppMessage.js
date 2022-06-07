import React, { useContext } from "react";
import { GlobalContext } from "../../store/GlobalStore";

export default function AppMessage() {
  const { appMessage } = useContext(GlobalContext);
    console.log(appMessage);
  return (
    <div className="app-message" style={{ backgroundColor: appMessage.color }}>
      AppMessage!
      {appMessage.msg}
    </div>
  );
}
