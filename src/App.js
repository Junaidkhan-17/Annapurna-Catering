import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Menu from './pages/Menu';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
                <Navbar />
      <div className="App">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;