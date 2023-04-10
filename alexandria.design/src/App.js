
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainContent from './components/Maincontents';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import projects from './components/res/data/projects.json';
import illustration from './components/res/data/illustration.json';

import Cake from './components/projects/Cake';


const App = () => {
  const allProjects = [...projects, ...illustration];

  return (
    <Router>
      <div className="App">
        <NavBar />
        <MainContent />
        <Routes>
        <Route path="/cake" element={<Cake />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;