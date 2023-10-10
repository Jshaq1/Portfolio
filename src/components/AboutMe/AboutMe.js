import '../../css/about-me.css'
import LeftCol from './LeftCol';
import RightCol from './RightCol';


const AboutMe = () => {

    return (
        <section id='about' className='about-me-container'>
            {/* <section className='about-me-header'>
                <h1>About me</h1>
            </section> */}
            <section className='about-inner-container'>
                <LeftCol></LeftCol>
                <RightCol></RightCol>
            </section>
        </section>
    )
}

export default AboutMe;