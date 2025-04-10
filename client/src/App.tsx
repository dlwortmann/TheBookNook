//import { Outlet } from 'react-router-dom';
import { useEffect, useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(darkMode ? 'dark-mode': 'light-mode');
  }, [darkMode]);
  
  return (
   <div>
    <Header />
    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
      <button id="theme-toggle" onClick={toggleMode}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
    <Footer />
   </div>
  )
}

export default App;


