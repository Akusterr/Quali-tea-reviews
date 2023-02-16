import React from 'react';
import "./styles/Navbar.css";
import { Outlet, Link } from "react-router-dom";


function Navbar({ onUser, setOnUser }) {


  function handleLogout(){
        fetch("/logout", {
            method: "DELETE"
        }).then((resp => {
            if (resp.ok){
                setOnUser(null)
            }
        }))
    }



    return (
    <div className="nav">
      {onUser ? (
      <nav>
        <div>
          <Link to="/home">Home</Link>
        </div>
        <div>
          <Link to="/tea">Teas</Link>
        </div>
        <div>
          <Link to="/reviews">Reviews</Link>
        </div>
        <button onClick={handleLogout}>Logout</button>
      </nav>
          ) : (
      <nav>
        <div>
          <Link to="/">Login</Link>
        </div> 
        <div>
          <Link to="/registration">Signup</Link>
        </div>
      </nav>)}

      <Outlet />
    </div>
  )
};


export default Navbar;