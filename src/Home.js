import './App.css';
import Hero from './components/Hero/Hero'
import ProjectsSection from './components/Projects/Projects-section';
import AboutMe from './components/AboutMe/AboutMe';
import ContactSection from './components/Contact/ContactSection';

function Home() {

    return (
        <div className='home'>
            <Hero />
            <ProjectsSection />
            <AboutMe />
            <ContactSection />
        </div>
    );
}

export default Home;
