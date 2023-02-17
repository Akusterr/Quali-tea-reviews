import React from 'react';
import "./styles/Profile.css";
import { Link } from 'react-router-dom'


function Profile( {onUser} ) {


  return (
    <div className='profile'>
        <div >
            <h1>welcome! {onUser.username}</h1>
            <h4>From: {onUser.location}</h4>
            <div>
            <Link exact to='/teas'><button>See your teaz</button></Link>
            </div>
            <div>
            <Link exact to='/reviews'><button>See Reviews</button></Link>
            </div>
        </div>
    </div>
  );
}

export default Profile;