import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Nested from '../components/Nested';
import gedssOutlines from '../data/gedssOutlines.json';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulating fetching data from the JSON file
    setData(gedssOutlines);
  }, []);

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
        <Link to="/burma-history" className="link-button">
          Burma History
        </Link>
      </div>
      <Nested topics={data} />
    </div>
  );
};

export default Home;
