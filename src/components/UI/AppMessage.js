import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../store/GlobalStore";

export default function AppMessage() {
  const { appMessage, clearAppMessage } = useContext(GlobalContext);
  console.log(appMessage);

  useEffect(() => {
    if (appMessage?.msg) {
      setTimeout(() => {
        clearAppMessage();
      }, appMessage.timer);
    }
  }, [appMessage, clearAppMessage]);

  return (
    <div className="app-message" style={{ backgroundColor: appMessage.color }}>
      AppMessage!
      {appMessage.msg}
    </div>
  );
}
