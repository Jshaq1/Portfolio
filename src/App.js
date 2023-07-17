import './App.css';
import NavBar from './Nav/NavBar';
import Hero from './Hero/Hero'
import ProjectsSection from './Projects/Projects-section';
import AboutMe from './AboutMe/AboutMe';
import ContactSection from './Contact/ContactSection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <ProjectsSection />
      <AboutMe />
      <ContactSection />
    </div>
  );
}

export default App;
