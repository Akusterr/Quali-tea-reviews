import React from 'react';
import "./styles/Navbar.css";
import { Outlet, Link } from "react-router-dom";


function Navbar() {

    return (
    <>
      <nav>
        <div className="nav">
          <div>
            <Link to="/">Home</Link>
          </div> 
          <div>
            <Link to="/tea">Teas</Link>
          </div>
          <div>
            <Link to="/reviews">Reviews</Link>
          </div>
          <div>
            <Link to="/registration">Registration</Link>
          </div>
          <div>
            <Link to="/loginform">Login</Link>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Navbar;