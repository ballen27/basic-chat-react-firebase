import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Navbar() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <span className="logo"> Simple Chat</span>
      <div className="user">
        {currentUser.photoURL ? (
          <img src="" alt="" />
        ) : (
          <div className="photoPlaceholder">
            {currentUser.displayName[0].toUpperCase()}
          </div>
        )}
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
