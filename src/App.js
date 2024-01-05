// App.js

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
