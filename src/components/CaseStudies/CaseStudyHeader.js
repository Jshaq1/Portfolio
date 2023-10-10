


const CaseStudyHeader = ({ title, category, image }) => {

    return (
        <section className='case-header' style={{ backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), #1a1a1a), url(${image})` }}>
            <div className='project-title'>
                <h3>{category === 'Web Design' ? 'CASE STUDY' : 'SHOW CASE'}</h3>
                <h1>{title}</h1>
                <h3>{category}</h3>
            </div>
        </section>
    )

}


export default CaseStudyHeader;