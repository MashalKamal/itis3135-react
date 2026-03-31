import React from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./layouts/SharedLayout";

// Pages
import Home from "./pages/Home";
import Contract from "./pages/Contract";
import FccCert from "./pages/FccCert";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Survey from "./pages/Survey";
import Inventory from "./pages/Inventory";
import Instructions from "./pages/Instructions";
import IntroForm from "./pages/IntroForm";
import WebsiteEvaluation from "./pages/WebsiteEvaluation";

// Styles
import "./App.css";

function App() {
  return (
    <Routes>
  <Route path="/" element={<SharedLayout />}>
    <Route index element={<Home />} />
    <Route path="contact" element={<Contact />} />
    <Route path="contract" element={<Contract />} />
    <Route path="fcc-cert" element={<FccCert />} />
    <Route path="survey" element={<Survey />} />
    <Route path="inventory" element={<Inventory />} />
    <Route path="intro-form" element={<IntroForm />} />
    <Route path="instructions" element={<Instructions />} />
    <Route path="website-evaluation" element={<WebsiteEvaluation />} />
  </Route>
</Routes>
  );
}

export default App;