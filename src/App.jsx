import './App.css'
import './index.css'
import React from "react";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' Component={Home} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
