import React, { useState } from 'react';

function Registration() {
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [userLocation, setUserLocation] = useState("")
  const [userImage, setUserImage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)

    let info = {
      username: userName,
      email: userEmail,
      password: userPassword,
      location: userLocation,
      image: userImage
    }

 fetch(`http://localhost:4000/signup`, {
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
        <div>
          <h3>Create Your Account</h3>

          <div>
            <label htmlFor="userName">Username</label>
            <input
              className="text-box-reg"
              type="text"
              name="userName"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input
              className="text-box-reg"
              type="text"
              name="email"
              id="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className="text-box-reg"
              type="password"
              name="password"
              id="password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <input
              className="text-box-reg"
              type="location"
              name="location"
              id="location"
              value={userLocation}
              onChange={(e) => setUserLocation(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="profilePicture">Profile Picture</label>
            <input
              className="text-box-reg"
              type="text"
              name="image"
              id="imageURL"
              value={userImage}
              onChange={(e) => setUserImage(e.target.value)}
            />
          </div>

          <button className="register-button" type="submit">
            Register
          </button>

          <div className="link-li">
            <h2>Already registered?</h2>

            {/* PUT LINK TO LOGIN FORM HERE!!! */}
            {/* <Link to="/Login">Already have an account?</Link> */}
          </div>
        </div>
      </form>




    </div>
  );
}

export default Registration;