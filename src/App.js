import React from 'react';
import './App.css';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom'
import Movies from "./components/movies/Movies";

import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/movies/:id' element={ <Movies/>}/>
        </Routes>
    </div>
  );
}

export default App;
