
import React, { useState, useEffect } from "react";
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Reviews from './components/Reviews';
import TeaPage from "./components/TeaPage";
import Registration from "./components/Registration";
import LoginForm from "./components/LoginForm"
import Profile from "./components/Profile"
import TeaDetailsPage from "./components/TeaDetailsPage";


function App() {

  const [onUser, setOnUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me")
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((onUser) => {
          setOnUser(onUser)
        });
      }
    });
  }, []);

  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<Navbar onUser={onUser} setOnUser={setOnUser} />}>
          <Route index element={<LoginForm onUser={onUser} setOnUser={setOnUser} />} />
          <Route path="teas" element={<TeaPage />} />
          <Route path="teas/:id" element={<TeaDetailsPage onUser={onUser} />} />
          <Route path="reviews" element={<Reviews onUser={onUser}/>} />
          <Route path="profile" element={<Profile onUser={onUser}/>} />
          <Route path="registration" element={<Registration onUser={onUser} setOnUser={setOnUser}/>} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
