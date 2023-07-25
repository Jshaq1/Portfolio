import './App.css';
import NavBar from './Nav/NavBar';
import Hero from './Hero/Hero'
import ProjectsSection from './Projects/Projects-section';
import AboutMe from './AboutMe/AboutMe';
import ContactSection from './Contact/ContactSection';
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom';
import CaseStudies from './CaseStudies/CaseStudies';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/work/:project' element={<CaseStudies></CaseStudies>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
