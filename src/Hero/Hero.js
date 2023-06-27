import '../CSS/hero-section.css'
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'

function Hero() {


    return (
        <section className='hero-container'>
            <LeftColumn />
            <RightColumn />
        </section>
    )
}


export default Hero