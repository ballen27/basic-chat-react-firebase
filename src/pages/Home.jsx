import React from "react";
import ChatWindow from "../components/ChatWindow";
import Sidebar from "../components/Sidebar";
import "../style.scss";
const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <Sidebar />
        <ChatWindow />
      </div>
    </div>
  );
};

export default Home;
