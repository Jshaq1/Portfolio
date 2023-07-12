import logo from './logo.svg';
import './App.css';
import NavBar from './Nav/NavBar';
import Hero from './Hero/Hero'
import ProjectsSection from './Projects/Projects-section';
import AboutMe from './AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Hero></Hero>
      <ProjectsSection></ProjectsSection>
      <AboutMe></AboutMe>
    </div>
  );
}

export default App;
