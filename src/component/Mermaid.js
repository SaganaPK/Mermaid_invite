import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Mermaid.css'; // Import your CSS

const Mermaid = () => {
  const navigate = useNavigate(); // Hook to navigate to a new page

  return (
    <div className="parallax-container">
      {/* First Section: Mermaid Page */}
      <section className="parallax-section mermaid-section">
        <div className="mermaid-container">
          <div className="mermaid-content">
            <h2 className="invitation-text">Welcome to Nithila and Nila's and 
            birthday! Dive into the magic of the deep blue and join us for an enchanting Underworld Mermaid Party</h2>
            <div className="rsvp-buttons">
              <Link to="/rsvp">
                <button className="rsvp-button button-1">Ready to make a splash</button>
              </Link>
              <button
                onClick={() => navigate('/no-attend')}
                className="rsvp-button button-2"
              >
                Stuck on dry land, can't make it
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section: Send a Message */}
      <section id="message" className="parallax-section message-section">
        <div className="parallax-content">
          <p>Send your warmest wishes, love, and magical blessings to Nila
             and Nithila as they celebrate their special day under the sea! Your hugs 
             and kisses will add to the enchantment of their Underworld Party</p>
          <form>
            <textarea placeholder="Your message here..." rows="5"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      {/* Third Section: Address */}
      <section id="address" className="parallax-section address-section">
        <div className="parallax-content">
          <h2>Event Address</h2>
          <h2>Poonkani Prty Hall</h2>
          <p>No 70 ,70/1 Balavinyagar Kovil street,thoothkudi</p>
        </div>
      </section>

      {/* Fourth Section: Date */}
      <section id="date" className="parallax-section date-section">
        <div className="parallax-content">
          <h2>Event Date</h2>
          <p>October 13, 2024</p>
          <h2>Event Time</h2>
          <p>Starts from: 1 PM</p>
        </div>
      </section>
    </div>
  );
};

export default Mermaid;
