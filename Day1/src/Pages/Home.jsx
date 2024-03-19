import React from 'react';
import Navbar from '../Components/Navbar';
import AdminSidebar from '../Components/AdminSidebar';
import EventCard from '../Components/EventCard'; 
import './Home.css'; 
import music from '../assets/mus.jpg'
import tech from '../assets/tech.jpeg'
import food from '../assets/food.jpeg'
import dino from '../assets/food.png'
import art from '../assets/art.jpg'
import sport from '../assets/tour.jpeg'
import birth from '../assets/birthday.jpg'
import fans from '../assets/fans.jpeg'
import art2 from '../assets/art2.jpeg'
import audio from '../assets/audio.jpg'
function Home() {
  return (
    <div>
      <Navbar />
      <div className="content-wrapper">
        <AdminSidebar />
        <div className="main-content">
          <h2>Welcome to Our Event Management System!</h2>
          <p>This is the home page of our application. You can navigate to different sections using the links in the sidebar.</p>
          <div className="event-list">
            <EventCard title="Music Festival" date="April 15, 2024" image={music} />
            <EventCard title="Tech Conference" date="May 10, 2024" image={tech} />
            <EventCard title="Food Expo" date="June 5, 2024" image={food} />
            <EventCard title="Art Exhibition" date="October 17, 2024" image={art} />  
            <EventCard title="Tournament" date="October 17, 2024" image={sport} />  
            <EventCard title="Art Exhibition" date="October 17, 2024" image={art2} />  
            <EventCard title="Birthday Party" date="October 17, 2024" image={birth} />  
            <EventCard title="Fans Meetup" date="june 22, 2004" image={fans} />  
            <EventCard title="Audio Lunch" date="October 17, 2024" image={audio} /> 
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
