

function SkillsCard({ index, details }) {
    const { title, techStack, about, expect } = details
    console.log(techStack)

    return (
        <article className='skills-card'>
            {/* <h3>0{index + 1}</h3> */}
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
                    return <li>{item}</li>
                })}
            </ul>
            {/* <p>{about}</p> */}


        </article>

    )
}

export default SkillsCard;