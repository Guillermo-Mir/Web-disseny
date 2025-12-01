import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Footer from './Footer';
import Home from './Home';
import Historia from './components/historia'
import Navbar from './components/Navbar';
import Galeria from './components/galeria'
import Forum from './components/forum'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/historia" element={<Historia/>}/>
        <Route path="/galeria" element={<Galeria/>}/>
        <Route path="/forum" element={<Forum/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
