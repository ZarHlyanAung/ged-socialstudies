import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to GED Social Studies History</h1>
      <p>Explore key historical events in US and global history.</p>
      <div className="links">
        <Link to="/us-history" className="link-button">
          US History
        </Link>
        <Link to="/global-history" className="link-button">
          Global History
        </Link>
      </div>
    </div>
  );
};

export default Home;
