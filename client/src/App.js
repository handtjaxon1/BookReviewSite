// React imports
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Component imports
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Books from "./components/book/Books";
import AddBook from "./components/book/AddBook";
import EditBook from "./components/book/EditBook";
import ViewBook from "./components/book/ViewBook";
import Reviews from "./components/review/Reviews";
import ReviewBook from "./components/review/ReviewBook";
import Profile from "./components/Profile";
import Auth from "./components/login/Auth";

function App() {
  // State that tracks if the user is currently logged in
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {/* TODO Make the Navbar sticky to the top, and display as absolute so it sits on top of the other pages */}
      <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home />} default index/>

        {/* Book pages */}
        <Route path="/books" element={<Books />} />
        <Route path="/books/add" element={<AddBook />} />
        <Route path="/books/:id/edit" element={<EditBook />} />
        <Route path="/books/:id" element={<ViewBook />} />

        {/* Review pages */}
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews/add/:id" element={<ReviewBook />} />

        {/* User pages */}
        <Route path="/auth" element={<Auth />}/>
        <Route path="/profile/:id" element={<Profile />}/>
      </Routes>
    </div>
  );
}

export default App;
