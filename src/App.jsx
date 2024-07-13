import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import USHistory from './pages/USHistory';
import GlobalHistory from './pages/GlobalHistory';
import './index.css';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/us-history">US History</Link>
          </li>
          <li>
            <Link to="/global-history">Global History</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/us-history" element={<USHistory />} />
        <Route path="/global-history" element={<GlobalHistory />} />
      </Routes>
    </Router>
  );
};

export default App;