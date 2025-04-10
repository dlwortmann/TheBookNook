//import { Outlet } from 'react-router-dom';
import { useEffect, useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'

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
      <button onClick={toggleMode}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>

    <div className="card">
      <h1 className="accent-text"></h1>
      <p>This is { darkMode ? 'Dark' : 'Light' } Mode</p>
    </div>
  
    <Footer />
   </div>
  )
}

export default App;