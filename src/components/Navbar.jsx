import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo"> Simple Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <span>Bronson</span>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
