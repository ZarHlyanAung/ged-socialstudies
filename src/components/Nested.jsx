import React from 'react';
import './Nested.css';

const Nested = ({ topics }) => {
  return (
    <div className="timeline">
      {topics.map((topic, index) => (
        <div key={index} className="timeline-topic">
          <h2>{topic.topic}</h2>
          {topic.events.map((event, eventIndex) => (
            <div key={eventIndex} className="timeline-event">
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
      ))}
    </div>
  );
};

export default Nested;
