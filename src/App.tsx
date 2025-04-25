import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import WhatWeDo from './pages/WhatWeDo';
import FocusAreas from './pages/FocusAreas';
import Technology from './pages/Technology';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contacts from './pages/Contact';
import SeparatePage from './pages/SeparatePage'; // імпортуй окрему сторінку
import { Box } from '@chakra-ui/react';
import PageWrapper from './components/PageWrapper';
import TransitionOverlay from './components/TransitionOverlay';

import { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => (
  <>
    <Navbar />
    <Box bg="#0c1650" minH="100vh">
      {children}
    </Box>
  </>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <>
        <TransitionOverlay key={location.pathname + '-overlay'} />
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/what-we-do"
            element={
              <PageWrapper>
                <WhatWeDo />
              </PageWrapper>
            }
          />
          <Route
            path="/about-us"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />
          <Route
            path="/focus-areas"
            element={
              <PageWrapper>
                <FocusAreas />
              </PageWrapper>
            }
          />
          <Route
            path="/technology"
            element={
              <PageWrapper>
                <Technology />
              </PageWrapper>
            }
          />
          <Route
            path="/projects"
            element={
              <PageWrapper>
                <Projects />
              </PageWrapper>
            }
          />
          <Route
            path="/blog"
            element={
              <PageWrapper>
                <Blog />
              </PageWrapper>
            }
          />
          <Route
            path="/contacts"
            element={
              <PageWrapper>
                <Contacts />
              </PageWrapper>
            }
          />
        </Routes>
      </>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/separate" element={<SeparatePage />} />
        {/* Route для окремої сторінки */}
        <Route
          path="*"
          element={
            <MainLayout>
              <AnimatedRoutes />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
