import React, { useState } from 'react';
import './AllEvents.css';
import EventBookingForm from './EventBookingForm';

const eventsData = [
  { id: 1, name: 'Music Concert', type: 'Concert', date: '2024-03-20', location: 'City Park' },
  { id: 2, name: 'Food Festival', type: 'Festival', date: '2024-03-25', location: 'Downtown Plaza' },
  { id: 3, name: 'Art Exhibition', type: 'Exhibition', date: '2024-03-30', location: 'Art Gallery' },
  // Add more event data as needed
];

const AllEvents = () => {
  const [filter, setFilter] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredEvents = eventsData.filter((event) =>
    event.type.toLowerCase().includes(filter.toLowerCase())
  );

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="all-events-container">
      <h2>All Events</h2>
      <div className="filter-container">
        <label htmlFor="eventType">Filter by Event Type:</label>
        <input
          type="text"
          id="eventType"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Enter event type"
        />
      </div>
      <div className="events-list">
        {filteredEvents.map((event) => (
          <div key={event.id} className="event-card" onClick={() => handleEventClick(event)}>
            <h3>{event.name}</h3>
            <p>Type: {event.type}</p>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
          </div>
        ))}
      </div>
      {selectedEvent && (
        <div className="event-modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>{selectedEvent.name}</h2>
            <EventBookingForm event={selectedEvent} onClose={handleCloseModal} />
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllEvents;
