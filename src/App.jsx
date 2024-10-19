import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Homepage from './pages/homepage'
import { BrowserRouter, Route ,Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage/>}/>              
              {/* <Route path="/events" element={<Events/>}/>               */}
            </Routes>              
    </BrowserRouter>
    </>
  )
}

export default App
