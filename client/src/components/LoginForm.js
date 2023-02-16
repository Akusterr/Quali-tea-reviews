import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    let userLogin = {
      username: username,
      password: password
    }

    fetch("http://localhost:4000/login", {
    method: "POST",
    headers: {
      "Content-Type": 'application/json',
    },
    body: JSON.stringify(userLogin)
  })
      .then(resp => resp.json())
      .then(user =>  addPerson(user))
  }

  const addPerson = () => {
    window.location.href = "http://localhost:4000/home"
    
  }
 

  return (
   <div>
    <form onSubmit={handleSubmit}>
      <div>
            <label htmlFor="username">Username</label>
            <input
              className="text-box-reg"
              type="username"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className="text-box-reg"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
    </form>
   </div>
  );
}

export default LoginForm;