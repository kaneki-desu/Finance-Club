// External Libraries
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Styles
import '../src/css/App.css';

// Components
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Sponser from './pages/Sponser'; 
import Events from './pages/Events';
import Team from './pages/Team';
import Blog2 from './pages/Blog2';
import Blog from './pages/Blog';
import Footer from './Components/Footer';
import LoadingScreen from './Components/LoadingScreen';
import Gallery from './pages/Gallery';

// Context Provider
import { ThemeProvider } from './contexts/theme';

function App() {
  const [themeMode, setThemeMode] = useState('dark');
  const [loading, setLoading] = useState(true);

  // Functions to toggle theme
  const darkTheme = () => setThemeMode('dark');
  const lightTheme = () => setThemeMode('light');

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    htmlElement.classList.remove('dark', 'light');
    htmlElement.classList.add(themeMode);
  }, [themeMode]);

  // Simulate loading (you can replace this with API call / real check)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5s fake loading
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />; // ✅ Only show while loading
  }

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/sponser" element={<Sponser />} /> */}
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog2 />} />
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
