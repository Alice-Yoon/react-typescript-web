import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CampApply, CampDetail, Home } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/campDetail/:id" element={<CampDetail />} />
      <Route path="/campApply" element={<CampApply />} />
    </Routes>
  );
}

export default App;
