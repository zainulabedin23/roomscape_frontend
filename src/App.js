// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './common/Navbar'; // Adjust the import path as necessary
import ImageUpload from './common/ImageUploader'; // Example of another component
import FinalSubmission from './common/FinalSubmission'; // Example of another component
import LandingPage from './common/LandingPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/final-submission" element={<FinalSubmission />} />
      </Routes>
    </Router>
  );
};

export default App;
