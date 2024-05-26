import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const { pathname } = useLocation();
  return (
    <nav className="navigation">
      {pathname !== "/archives" ? (
        <Link to="/archives" title="Archives">
          Arsip
        </Link>
      ) : (
        <Link to="/" title="Home">
          Home
        </Link>
      )}
    </nav>
    
  );
}

export default NavBar;
