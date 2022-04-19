// React imports
import { Routes, Route } from "react-router-dom";

// Component imports
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Books from "./components/book/Books";
import AddBook from "./components/book/AddBook";
import EditBook from "./components/book/EditBook";
import ViewBook from "./components/book/ViewBook";
import Reviews from "./components/review/Reviews";
import AddReview from "./components/review/AddReview";
import EditReview from "./components/review/EditReview";
import Profile from "./components/profile/Profile";
import Auth from "./components/login/Auth";

function App() {
  return (
    <div>
      {/* TODO Make the Navbar sticky to the top, and display as absolute so it sits on top of the other pages */}
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} default index/>

        {/* Book pages */}
        <Route path="/books" element={<Books />} />
        <Route path="/books/add" element={<AddBook />} />
        <Route path="/books/:id/edit" element={<EditBook />} />
        <Route path="/books/:id" element={<ViewBook />} />

        {/* Review pages */}
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews/add/:id" element={<AddReview />} />
        <Route path="/reviews/:id/edit" element={<EditReview />} />

        {/* User pages */}
        <Route path="/auth" element={<Auth />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </div>
  );
}

export default App;