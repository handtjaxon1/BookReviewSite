// React imports
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Component imports
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Books from "./components/Books";
import Reviews from "./components/Reviews";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Signup from "./components/Signup";

function App() {
  // State that tracks if the user is currently logged in
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {/* TODO Make the Navbar sticky to the top, and display as absolute so it sits on top of the other pages */}
      <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home />} default index/>
        <Route path="/books" element={<Books />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
        <Route path="/signup" element={<Signup loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
        <Route path="/profile/:id" element={<Profile />}/>
      </Routes>
    </div>
  );
}

export default App;
