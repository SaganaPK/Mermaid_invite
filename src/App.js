import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mermaid from './component/Mermaid';
import RSVPForm from './component/RSVPForm';
import MessagePage from './component/MessagePage';
import AddressPage from './component/AddressPage';
import DatePage from './component/DatePage';
import NoAttendMessage from './component/NoAttendMessage'; // Import the new page

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Mermaid />} />
          <Route path="/rsvp" element={<RSVPForm />} />
          <Route path="/message" element={<MessagePage />} />
          <Route path="/address" element={<AddressPage />} />
          <Route path="/date" element={<DatePage />} />
          <Route path="/no-attend" element={<NoAttendMessage />} /> {/* New route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
