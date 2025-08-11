import React from 'react';
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Missao from './pages/missao';
import Header from './components/header';
import Footer from './components/footer';
import SaibaMais from './pages/saibamais';
import Clinica from './pages/clinica';
import WhatsAppIcon from './components/whatsappIcon'; // Adjust the import path as necessary
// Update the import path if necessary, e.g.:

function App() {
  return (
    <Router>
      <Header />
      <WhatsAppIcon phoneNumber="5522997155439" message="Olá! Quero saber mais sobre o processo de resgate." />
      <Routes>
        <Route path="/missao" element={<Missao />} />
        <Route path="/saibamais" element={<SaibaMais />} />
        <Route path="/clinica" element={<Clinica />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        {/* You can add more routes here later */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

