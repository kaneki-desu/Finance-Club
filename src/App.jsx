import '../src/css/App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Sponsor from './pages/Sponser';
import Events from './pages/Events';
import Blog from './pages/Blog';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './contexts/theme';




function App() {
  const [themeMode, setThemeMode]=useState('dark')
  const darkTheme=()=>{
    setThemeMode('dark')
  }
  const lightTheme=()=>{
    setThemeMode('light')
  }

  useEffect(()=>{
    console.log(themeMode)
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(themeMode)
    
  })
  return (
    <>
      <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/sponsor" element={<Sponsor/>}/>
            <Route path="/events" element={<Events/>}/>
            <Route path="/blog" element={<Blog/>}/>
          </Routes>
        </Router>
      </ThemeProvider>
    
    </>
  );
}

export default App;
