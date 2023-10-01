import '../CSS/contact.css'
import GITHUB from '../Images/github-sign (1).png'
import LINKEDIN from '../Images/linkedin.png'
import INSTAGRAM from '../Images/instagram.png'


function ContactSection() {

    return (
        <section className='contact-section' id="contact">
            <section className='form-header'>
                <div className='header-title'>
                    <h1>LET'S TALK</h1>
                    <h1>OR JUST CHAT</h1>
                    <h4>(I sound lonely.. I'm not I promise)</h4>
                </div>
                <div className='contact-details'>
                    <h2>JRDNALLENDEV@GMAIL.COM</h2>
                    <h2>0468 897 142</h2>
                    <div className='social-links contact'>
                        <a href='https://www.linkedin.com/in/jordan-allen-36ab53149/' target="_blank" rel="noreferrer"><img alt='Linkedin Logo' src={LINKEDIN} /></a>
                        <a href='https://github.com/Jshaq1' target="_blank" rel="noreferrer"><img alt='Github Logo' src={GITHUB} /></a>
                        <a href='https://www.instagram.com/_jrdn.a/?hl=en' target="_blank" rel="noreferrer"><img alt='Instagram Logo' src={INSTAGRAM} /></a>
                    </div>
                </div>
            </section>
        </section>

    )
}

export default ContactSection