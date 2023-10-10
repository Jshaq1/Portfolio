import '../CSS/hero-section.css'
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'

const Hero = () => {
    return (
        <section id='hero' className='hero-container'>
            <LeftColumn />
            <RightColumn />
        </section>
    )
}


export default Hero