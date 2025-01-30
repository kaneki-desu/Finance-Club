// External Libraries
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Styles
import '../src/css/App.css';

// Components
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Sponsor from './pages/Sponser'; // Fixed filename
import Events from './pages/Events';
import Team from './pages/Team';

// Context Provider
import { ThemeProvider } from './contexts/theme';
import Blog from './pages/Blog';
import Footer from './Components/Footer';

function App() {
  const [themeMode, setThemeMode] = useState('dark');

  // Functions to toggle theme
  const darkTheme = () => setThemeMode('dark');
  const lightTheme = () => setThemeMode('light');

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    htmlElement.classList.remove('dark', 'light');
    htmlElement.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
