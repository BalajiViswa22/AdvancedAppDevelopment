import React, { useState } from 'react';
import './EventBookingForm.css';
import '../Components/Navbar'

const EventBookingForm = () => {
  const [eventName, setEventName] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [username, setUsername] = useState('');
  const [headCount, setHeadCount] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [bookedEvents, setBookedEvents] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the event is already booked on the same date
    const isAlreadyBooked = bookedEvents.some(event => event.name === eventName && event.date === bookingDate);
    if (isAlreadyBooked) {
      setMessage('Event already booked on this date. Please select another date.');
      return;
    }

    // Proceed with the booking logic if the event is not already booked
    if (eventName && bookingDate && username && headCount && amount) {
      setBookedEvents([...bookedEvents, { name: eventName, date: bookingDate }]);
      setMessage(`Booking successful for ${eventName} on ${bookingDate} by ${username}.`);
      // You can add further logic to handle the head count and amount if needed
    } else {
      setMessage('Please fill out all fields');
    }
  };

  return (
    <div className="booking-form-container">
      <h2>Event Booking Form</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="eventName">Event Name:</label>
          <input
            type="text"
            id="eventName"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bookingDate">Booking Date:</label>
          <input
            type="date"
            id="bookingDate"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="headCount">Head Count:</label>
          <input
            type="number"
            id="headCount"
            value={headCount}
            onChange={(e) => setHeadCount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Book Event</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default EventBookingForm;
