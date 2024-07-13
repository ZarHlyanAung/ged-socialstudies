import React from 'react';
import Timeline from '../components/Timeline';
import usHistory from '../data/usHistory.json';

const USHistory = () => {
  return (
    <div>
      <h1 className="page">US History</h1>
      <Timeline events={usHistory} />
    </div>
  );
};

export default USHistory;
