import aboutMeData from "./aboutMeData"
import SkillsCard from "./SkillsCard"

const RightCol = () => {


    return (
        <section className='about-right-col'>
            {aboutMeData.map((info, idx) => {
                return (
                    <SkillsCard
                        key={idx}
                        index={idx}
                        details={info}
                    ></SkillsCard>
                )
            })}
        </section>
    )
}

export default RightCol