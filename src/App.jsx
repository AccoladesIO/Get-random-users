import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";
import User from "./Pages/Users/Users";

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' exact
          element={
            <>
              <Navbar />
              <Home />
            </>
          } />
        <Route path='/user'
          element={
            <>
              <Navbar />
              <User />
            </>
          } />
        <Route path='*' element={
          <Error />
        } />
      </Routes>
    </Router>
  )
}

export default App;
