import React from 'react';
import Timeline from '../components/Timeline';
import globalHistory from '../data/globalHistory.json';

const GlobalHistory = () => {
  return (
    <div className="page">
      <h1>Global History</h1>
      <Timeline events={globalHistory} />
    </div>
  );
};

export default GlobalHistory;
