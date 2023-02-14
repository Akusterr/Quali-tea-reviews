
import React from "react";
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Reviews from './components/Reviews';
import Profile from './components/Profile';
import Tea from './components/Tea';


function App() {


  return (

    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="tea" element={<Tea />} />
          <Route path="profile" element={<Profile />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
