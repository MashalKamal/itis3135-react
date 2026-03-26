import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './layouts/SharedLayout';
import Home from './pages/Home';
import Contract from './pages/Contract'; // create this file if you add it
import FccCert from './pages/FccCert';   // create if needed
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="contract" element={<Contract />} />
          <Route path="fcc-cert" element={<FccCert />} />
          {/* add more routes as you create pages */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;