import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Home from "./pages/Home";
import MatchDetail from "./pages/MatchDetail";
import MatchResult from "./pages/MatchResult";
import { ToastContainer } from "react-toastify";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/match-detail/:id" element={<MatchDetail/>} />
          <Route path="/match-result" element={<MatchResult/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
      <ToastContainer autoClose={1500} />
    </>
  )
}

export default App