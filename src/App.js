import React, { useState } from "react";
import "./App.css";
// import Header from './components/header/Header';
import { Routes, Route } from "react-router-dom";
import Movies from "./components/movies/Movies";
import Loader from "../src/components/loader/Loader";

import Home from "./components/home/Home";
import { useEffect } from "react";

function App() {

  // Use state for loader
  const [getLoader, setGetLoader] = useState(true);

  //create an async method to fetch data
  useEffect(() => {
    setTimeout(() => {
      setGetLoader(false);
    }, 4000);
  });

  return getLoader ? (
    <Loader />
  ) : (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
