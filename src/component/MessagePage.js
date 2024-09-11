import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebaseConfig'; // Adjust the path to your firebaseConfig file
import '../styles/MessagePage.css'; 
import jellyfish from '../assets/gif/jellyfish.gif'; 

const MessagePage = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // To show loading state
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message) {
      setError('Message cannot be empty');
      return;
    }

    setLoading(true);

    try {
      // Add the message to Firebase Firestore
      await addDoc(collection(db, 'wish'), {
        message: message,
        timestamp: new Date(),
      });

      alert('Message sent successfully!');
      setMessage(''); // Clear the message
    } catch (err) {
      console.error("Error adding document: ", err);
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="message-page-container">
      <div className="message-content">
        <h2>Send a Message</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <textarea 
            placeholder="Your message here..." 
            rows="5" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
      <img src={jellyfish} alt="Jellyfish" className="bottom-gif" />
    </div>
  );
};

export default MessagePage;
