

function SkillsCard({ index, details }) {
    const { title, techStack, about, experience } = details
    console.log(techStack)

    return (
        <article className='skills-card'>
            {/* <h3>0{index + 1}</h3> */}
            <h2>{title}</h2>
            <h4>skills:</h4>
            <div className='skills'>
                {techStack.map((skill, idx) => {
                    return (
                        <div
                            key={idx}
                            className={idx === 0 || idx === techStack.length - 1 ? 'highlight skill' : 'skill'}
                        >
                            {skill.toUpperCase()}
                        </div>
                    )
                })}
            </div>
            <p>{about}</p>
        </article>

    )
}

export default SkillsCard;