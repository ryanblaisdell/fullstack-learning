import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner';
import NavigationBar from './components/NavigationBar';
import imagePath from './assets/sample_logo.png';

// Import your page components
import HomePage from './pages/HomePage';

function App() {

  let items = [
    { label: "Home", path: "/home" },
    { label: "Services", path: "/services" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <Router>
      <div className="App">
        <Banner />
        <NavigationBar 
          brandName="Ryan Blaisdell's Full-Stack Fitness" 
          imageSrcPath={imagePath} 
          navItems={items} 
        />
        <Routes>
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;