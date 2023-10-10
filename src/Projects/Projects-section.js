import '../CSS/projects.css';
import Carousel from './Carousel';

const ProjectsSection = () => {

    return (
        <section id='work' className="projects-section">
            <section className="projects-header">
                <div><h2>Work</h2></div>
                <div><p>Check out some of my work, I think it's all pretty neat.</p></div>
            </section>
            <Carousel></Carousel>
        </section>
    )
}

export default ProjectsSection;