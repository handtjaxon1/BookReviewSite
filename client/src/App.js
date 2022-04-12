// React imports
import React from "react";
import { Routes, Route } from "react-router-dom";

// Component imports
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Books from "./components/Books";
import Reviews from "./components/Reviews";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} default index/>
        <Route path="/books" element={<Books />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
