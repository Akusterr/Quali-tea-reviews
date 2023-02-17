import React, { useState } from 'react';
import "./styles/Registration.css"

function Registration() {
  const [userName, setUserName] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [userLocation, setUserLocation] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    let info = {
      username: userName,
      password: userPassword,
      location: userLocation
    }

 fetch("/signup", {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(info)
        })

        .then(resp => resp.json())
        .then(console.log)
    }

   
  



  return (
    <div className="reg-form-wrapper">

      <form onSubmit={handleSubmit} className="registerForm">
          <h3>Create Your Account</h3>
          <input type="text" name="username" placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)} />
          <input type="password" name="password" placeholder="Password" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
          <input type="text" name="location" placeholder="Location" value={userLocation} onChange={(e) => setUserLocation(e.target.value)} />
          
          <button type="submit">Register</button>
      </form>
      
    </div>

  );
}

export default Registration;