import React from "react";
import Chats from "./Chats";
import ChatWindow from "./ChatWindow";
import Navbar from "./Navbar";
import Search from "./Search";

function Sidebar() {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
}

export default Sidebar;
