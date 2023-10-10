

const SkillsCard = ({ index, details }) => {
    const { title, techStack, expect } = details

    return (
        <article className='skills-card'>
            <h2>{title}</h2>
            <h4>Skills:</h4>
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
            <h4>What to expect:</h4>
            <ul>
                {expect.map((item, idx) => {
                    return <li key={idx}>{item}</li>
                })}
            </ul>
        </article>

    )
}

export default SkillsCard;