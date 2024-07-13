import React from 'react';
import Timeline from '../components/Timeline';
import burmaHistory from '../data/burmaHistory.json';

const BurmaHistory = () => {
  return (
    <div className="page">
      <h1>Burma History</h1>
      <Timeline events={burmaHistory} />
    </div>
  );
};

export default BurmaHistory;
