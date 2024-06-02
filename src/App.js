import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Experience from './components/experience';
import Projects from './components/projects';
import Contact from './components/contact';
import Header from './components/header';
import Education from './components/education';
import Certifications from './components/certification';
import AdditionalDetails from './components/additionalDetails';



const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
    <Router>
      <Header />
      <div className="mt-16">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education/>
        <Certifications/>
        <AdditionalDetails/>
        <Contact />
        
      </div>
    </Router>
  </MantineProvider>
  );
};

export default App;
