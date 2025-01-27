import '../../css/projects.css';
import Carousel from './Carousel';

const ProjectsSection = () => {

    return (
        <section id='work' className="projects-section">
            <section className="projects-header">
                <div><h2>Work</h2></div>
                <div><p>Some neat projects I've worked on</p></div>
            </section>
            <Carousel></Carousel>
        </section>
    )
}

export default ProjectsSection;