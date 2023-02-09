import { faEllipsis, faUser, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Input from "./Input";
import Messages from "./Messages";

const ChatWindow = () => {
  return (
    <div className="chatWindow">
      <div className="chatInfo">
        <span>Bronson</span>
        <div className="menuIcons">
          <FontAwesomeIcon className="icon" icon={faVideo} />
          <FontAwesomeIcon className="icon" icon={faUser} />
          <FontAwesomeIcon className="icon" icon={faEllipsis} />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default ChatWindow;
