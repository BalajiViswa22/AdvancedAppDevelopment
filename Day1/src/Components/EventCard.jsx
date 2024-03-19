import React from 'react';
import './EventCard.css'; 


function EventCard({ title, date, image }) {
  return (
    <div className="event-card">
      <img src={image} alt={title} className="event-image" />
      <div className="event-details">
        <h3 className="event-title">{title}</h3>
        <p className="event-date">{date}</p>
      </div>
    </div>
  );
}

export default EventCard;
