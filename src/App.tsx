import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import { Box } from '@chakra-ui/react';
import WhatWeDo from './pages/WhatWeDo';
import FocusAreas from './pages/FocusAreas';
import Technology from './pages/Technology';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contacts from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/focus-areas" element={<FocusAreas />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
