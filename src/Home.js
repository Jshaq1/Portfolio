import './App.css';
import Hero from './Hero/Hero'
import ProjectsSection from './Projects/Projects-section';
import AboutMe from './AboutMe/AboutMe';
import ContactSection from './Contact/ContactSection';

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
