import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Haider from './components/Haider';
import Footer from './components/Footer';
import Aboutme from './components/Aboutme';
import Services from './components/Services';

function App() {
  return (
    <div className="bg-black text-white">
      <Router>
        {/* Header */}
        <Haider />
        <main>
          <Aboutme />
          <Services />
        </main>
        {/* Footer */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
