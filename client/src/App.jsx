import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index.jsx';
import Prototype from './pages/Prototype.jsx';
import NotFound from './pages/NotFound.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/prototype" element={<Prototype />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
