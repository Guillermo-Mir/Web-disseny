import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import { Routes } from 'react-router-dom';
/*import Menu from './Menu'; 
import Footer from './Footer';
*/
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Footer/>}/>
      </Routes>
    </div>
  )
}

export default App
