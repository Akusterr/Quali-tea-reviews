
import React from "react";
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Reviews from './components/Reviews';
import TeaPage from "./components/TeaPage";
import Registration from "./components/Registration";


function App() {


  return (

    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="tea" element={<TeaPage />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="registration" element={<Registration />} />
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
