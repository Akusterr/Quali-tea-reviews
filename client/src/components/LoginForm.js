import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    let userLogin = {
      email: email,
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
    
  }
 

  return (
   <div>
    <form onSubmit={handleSubmit}>
      <div>
            <label htmlFor="email">Email</label>
            <input
              className="text-box-reg"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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