import { Outlet } from 'react-router-dom';
import  NavTab  from './components/Navtab'
import './App.css'

function App() {
  
  return (
   <>
   <NavTab />
   <main>
    <Outlet />
   </main>
   </>
  )
}

export default App
