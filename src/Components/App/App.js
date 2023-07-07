import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Topbar from '../Topbar';
import AboutMe from '../AboutMe';
import Connect from '../Connect';
import Navbar from '../Navbar';
import Portfolio from '../Portfolio';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfoliopage" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Navbar />
      <Topbar />
      <AboutMe />
      <Connect />
      <Typography className="footerBar123" sx={{ color: 'white', backgroundColor: '#003049', mt: '48px', padding: '12px', display: 'flex', justifyContent: 'center' }}>Created by Neil Brooks, 2023</Typography>
    </div>
  );
}

export default App;
