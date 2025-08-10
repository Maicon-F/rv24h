import React from 'react';
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/sobre';
import Header from './components/header';
import Contato from './pages/contato';
import WhatsAppIcon from './components/whatsappIcon'; // Adjust the import path as necessary
// Update the import path if necessary, e.g.:

function App() {
  return (
    <Router>
        <Header />
        <WhatsAppIcon phoneNumber="5522997155439" message="Olá! Quero saber mais sobre o processo de resgate." />
      <Routes>
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/" element={<Home />} />
         <Route path="*" element={<Navigate to="/" replace />} />
        {/* You can add more routes here later */}
      </Routes>
    </Router>
  );
}

export default App;

