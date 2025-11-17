import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Historia from './components/historia'
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/historia" element={<Historia/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
