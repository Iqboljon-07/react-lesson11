import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <header className={`link ${pathname == "/like" ? "red" : ""} `}>
        <div className="header_item">
          <NavLink to={"/"}>Users </NavLink>
          <NavLink to={"/product"}>Products</NavLink>
          <NavLink to={"/comment"}>Comment</NavLink>
          <NavLink to={"/like"}>Likes</NavLink>
        </div>
      </header>
    </>
  );
}

export default Header;
