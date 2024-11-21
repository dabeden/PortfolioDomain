import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact"
import About from "./components/About"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path ="/" element = {<Home />} />
          <Route path ="/aboutme" element = {<About />} />
          <Route path ="/contactme" element = {<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
