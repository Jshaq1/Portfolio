
const ProjectLink = () => {

    const buttonText = 'GO ON TAKE A LOOK * GO ON TAKE A LOOK * '

    return (
        <h1>
            {buttonText.split('').map((letter, idx) => {
                return <span
                    style={{ transform: `rotate(${idx * 9.1}deg)` }}
                >{letter}</span>
            })}
        </h1>
    )
}


export default ProjectLink;