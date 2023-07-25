import CaseStudyHeader from "./CaseStudyHeader"
import { useParams } from "react-router-dom";
import webprojects from "../Projects/ProjectsData";
import '../CSS/case-studies.css';

function CaseStudies() {
    let { project } = useParams()

    const selectedProject = webprojects.filter(work => work.title === project)

    return (
        <section>
            <CaseStudyHeader
                title={selectedProject[0].title}
                category={selectedProject[0].categories}
                image={selectedProject[0].image}
            />
            {/* <Summary></Summary> */}
            {/* <Challenge></Challenge> */}
            {/* <Solution></Solution> */}
        </section>
    )

}


export default CaseStudies