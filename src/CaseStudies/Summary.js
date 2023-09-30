import ProjectLink from "./ProjectLink";
import ARROW from '../Images/up-right-arrow.png'

function Summary({ summary, challenge, solution, images, link, techStack }) {

    return (
        <section className='case-summary'>
            <h3>{summary}</h3>
            <div className="project-link">
                <a href={link} target="_blank_">
                    <div className="arrow-div">
                        <img alt="arrow" src={ARROW}></img>
                    </div>
                    <div className="project-link-container">
                        <ProjectLink />
                    </div>
                </a>
            </div>
            <article className="case-study">
                <div className="case-details">
                    <h3>CHALLENGE</h3>
                    <p>{challenge}</p>
                </div>
                <div className="case-details">
                    <h3>SOLUTION</h3>
                    <p>{solution}</p>
                </div>
                <h3> TECH STACK</h3>
                <div className='techs'>
                    {techStack.map((tech, idx) => {
                        return (
                            <div
                                key={idx}
                                className={idx === 0 || idx === techStack.length - 1 ? 'highlight tech' : 'tech'}
                            >
                                {tech.toUpperCase()}
                            </div>
                        )
                    })}
                </div>
            </article>
            <div className="case-study-image">
                {images.map(img => {
                    return <img src={img} alt={img} />
                })}
            </div>

        </section>
    )
}


export default Summary;