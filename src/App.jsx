import './App.css'
import './index.css'
import React from "react";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Game from './components/Game';
function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' Component={Home} />
      <Route path='/game' Component={Game} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
