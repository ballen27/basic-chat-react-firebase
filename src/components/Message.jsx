import React from "react";

function Message() {
  return (
    <div className=" owner message">
      <div className="messageInfo">
        <img src="http://placehold.it/50" alt="" />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="http://placehold.it/250" alt="" />
      </div>
    </div>
  );
}

export default Message;
