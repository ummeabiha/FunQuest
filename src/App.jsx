import './App.css'
import './index.css'
import React from "react";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Game from './components/Game';
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import ChildEdu from "./Components/ChildEdu";
import Subject from "./Components/Subject";
import MathPage from "./Components/MathPage";
import SciencePage from "./Components/SciencePage";
import ArtMain from "./Components/ArtFirst";
import Art from "./Components/Artpage";
import Ocean from "./Components/Ocean";
import Education from "./Components/Edu";
function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' Component={Home} />
      <Route path='/game' Component={Game} />
      <Route path="/Signup" element={<Signup />}/>  
      <Route path="/Login" element={<Login />}/>
  {/* Art and craft main page */}
      <Route path="/ArtMain" element={<ArtMain />} />
      <Route path="/art" element={<Art />} />
      <Route path="/ocean" element={<Ocean />} /> 
        
  {/* Education section Mainpage */}
      <Route path="ChildEdu" element={<ChildEdu />} />
  {/* Subject page containing Math and Science Subject */}
      <Route path="/Subject" element={<Subject/>}/>
        
  {/* Math Section */}
      <Route path="/MathPage" element={<MathPage />} />
        
  {/* Science Section */}
      <Route path="/SciencePage" element={<SciencePage />} />
        
  {/* Upcoming Courses page */}
      <Route path="/Education" element={<Education />} />
          
      </Routes>
    </Router>
      
    </>
  )
}

export default App
