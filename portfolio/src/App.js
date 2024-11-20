import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to ="/">Home</Link>
        </nav>
        <Routes>
          <Route path ="/" element = {<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
