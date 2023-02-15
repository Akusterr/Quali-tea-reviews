import React from 'react';


function Registration() {


  return (
    <div className="">


      <form className="registerForm">
        <div className="register-form">
          <h3>Create Your Account</h3>

          <div>
            <label htmlFor="firstName">Name</label>
            <input
              className="text-box-reg"
              type="text"
              name="name"
              id="name"
              // value={firstName}
              // onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input
              className="text-box-reg"
              type="text"
              name="username"
              id="username"
              // value={username}
              // onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className="text-box-reg"
              type="password"
              name="password"
              id="password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="profilePicture">Profile Picture</label>
            <input
              className="text-box-reg"
              type="text"
              name="image"
              id="imageURL"
              // value={profilePicture}
              // onChange={(e) => setProfilePicture(e.target.value)}
            />
          </div>
          <button className="login-button" type="submit">
            Register
          </button>
          <div className="link-li">
            <h2>Already registered?</h2>

            {/* link to login here!! */}
            {/* <Link to="/Login">Already have an account?</Link> */}
          </div>
        </div>
      </form>




    </div>
  );
}

export default Registration;