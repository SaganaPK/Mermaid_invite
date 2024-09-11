import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NoAttendMessage.css'; // You can style this as needed

const NoAttendMessage = () => {
  return (
    <div className="no-attend-message-container">
      <h2>We'll Miss You!</h2>
      <p>
        We'll miss you splashing around with us under the sea! It won't be the same without you, but we'll send a wave of love your way.
      </p>
      <Link to="/">
        <button className="home-button">Return to Home</button>
      </Link>
    </div>
  );
};

export default NoAttendMessage;
