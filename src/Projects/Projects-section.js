import '../CSS/projects.css';
import Carousel from './Carousel';

function ProjectsSection() {

    return (
        <section className="projects-section">
            <section className="projects-header">
                <div><h2>Works</h2></div>
                <div><p>Check out some of my work, I think its pretty neat.</p></div>
            </section>
            <Carousel></Carousel>
        </section>
    )
}

export default ProjectsSection;