import React from 'react';
import './Timeline.css';

const Timeline = ({ events }) => {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className="timeline-event">
          <div className="timeline-point"></div>
          <div className="timeline-content">
            <h3>
              {new Date(event.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </h3>
            <p>{event.event}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
