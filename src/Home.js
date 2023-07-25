import './App.css';
import NavBar from './Nav/NavBar';
import Hero from './Hero/Hero'
import ProjectsSection from './Projects/Projects-section';
import AboutMe from './AboutMe/AboutMe';
import ContactSection from './Contact/ContactSection';

function Home() {
    return (
        <div>
            <Hero />
            <ProjectsSection />
            <AboutMe />
            <ContactSection />
        </div>
    );
}

export default Home;
