import React from "react";

function Search() {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        <div className="userChatInfo">
          <span>Bronson</span>
        </div>
      </div>
    </div>
  );
}

export default Search;
