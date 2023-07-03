import logo from './logo.svg';
import './App.css';
import NavBar from './Nav/NavBar';
import Hero from './Hero/Hero'
import ProjectsSection from './Projects/Projects-section';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Hero></Hero>
      <ProjectsSection></ProjectsSection>
    </div>
  );
}

export default App;
