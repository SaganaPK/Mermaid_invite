import React from 'react';
import '../styles/DatePage.css';
import swim from '../assets/gif/swim.gif'; 

const DatePage = () => {
  return (
    <div className="date-page-container">
    <div className="date-content">
      <h2>Event Date</h2>
      <p>October 13, 2024</p>
      <h2>Event Time</h2>
      <p>Starts from: 1 PM</p>
    </div>
    <img src={swim} alt="swim animation" className="bottom-gif" />
  </div>
  );
};

export default DatePage;
