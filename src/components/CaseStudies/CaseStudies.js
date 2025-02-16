import CaseStudyHeader from "./CaseStudyHeader"
import Summary from "./Summary";
import Gallery from "./Gallery";
import { useParams } from "react-router-dom";
import webprojects from "../Projects/ProjectsData";
import '../../css/case-studies.css';
import { useEffect } from "react";

const CaseStudies = () => {
    let { project } = useParams()

    const selectedProject = webprojects.filter(work => work.title === project)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const summaries = ['Web Design', 'Branding', 'Software Dev']

    return (
        <section className="case-studies-body">
            <CaseStudyHeader
                title={selectedProject[0].title}
                category={selectedProject[0].categories}
                image={selectedProject[0].image}
            />
            {summaries.includes(selectedProject[0].categories) ?
                <Summary
                    summary={selectedProject[0].summary}
                    challenge={selectedProject[0].challenge}
                    solution={selectedProject[0].solution}
                    images={selectedProject[0].images}
                    link={selectedProject[0].link}
                    techStack={selectedProject[0].techStack} />
                :
                <Gallery
                    images={selectedProject[0].images}
                    techstack={selectedProject[0].techStack}
                />}
        </section>

    )

}


export default CaseStudies