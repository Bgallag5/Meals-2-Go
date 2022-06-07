import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../store/GlobalStore";

export default function AppMessage() {
  const { appMessage, clearAppMessage } = useContext(GlobalContext);
  console.log(appMessage);

  //clear app message after 'timer' seconds
  useEffect(() => {
    if (appMessage?.msg) {
      setTimeout(() => {
        clearAppMessage();
      }, appMessage.timer * 1000);
    }
  }, [appMessage, clearAppMessage]);

  return (
    <div className="app__message" style={{animationDuration: `${appMessage.timer}s`}}>
     <p className="app__message--msg text-regular">{appMessage.msg}</p> 
     <p className="app__message--emoji">{appMessage.emoji || `👍`}</p>
    </div>
  );
}
