import { faFileImage, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Input() {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <FontAwesomeIcon className="icon" icon={faFileImage} />
        <FontAwesomeIcon className="icon" icon={faPaperclip} />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src="" alt="" />
        </label>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
}

export default Input;
