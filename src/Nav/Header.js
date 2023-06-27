import GITHUB from '../Images/github-sign (1).png'
import LINKEDIN from '../Images/linkedin.png'
import INSTAGRAM from '../Images/instagram.png'


function Header({ onClick }) {

    return (
        <header
            className='side-menu'
            onClick={onClick}
        >
            <a href='/#'>LOGO</a>
            <div className='hamburger-menu'>XX</div>
            <div className='social-links'>
                <a href='/#'><img alt='Github Logo' src={GITHUB} /></a>
                <a href='/#'><img alt='Linkedin Logo' src={LINKEDIN} /></a>
                <a href='/#'><img alt='Instagram Logo' src={INSTAGRAM} /></a>
            </div>
        </header>
    )
}

export default Header;