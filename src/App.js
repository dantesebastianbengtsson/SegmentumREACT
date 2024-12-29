import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SegmentList from './components/SegmentList';
import SegmentDetails from './components/SegmentDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SegmentList />} />
        <Route path="/segment/:id" element={<SegmentDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
