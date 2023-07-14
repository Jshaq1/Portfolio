import GITHUB from '../Images/github-sign (1).png'
import LINKEDIN from '../Images/linkedin.png'
import INSTAGRAM from '../Images/instagram.png'
import { Squash as Hamburger } from 'hamburger-react'
import LOGO from '../Images/logowordmark.png'



function Header({ onClick, hamBurgerStatus }) {


    return (
        <header className={hamBurgerStatus ? 'side-menu active' : 'side-menu'}>
            <a className='logo' href='/'><img alt='logo' src={LOGO} /></a>
            <div className='side-menu-click' onClick={onClick} >
                <Hamburger
                    toggled={hamBurgerStatus}
                    easing="ease-out"
                    color='#fc7a5b'
                    distance="lg"
                    direction="right"
                    size={50}
                    label="Show menu"
                    rounded />
            </div>
            <div className='social-links'>
                <a href='https://github.com/Jshaq1' target="_blank"><img alt='Github Logo' src={GITHUB} /></a>
                <a href='https://www.linkedin.com/in/jordan-allen-36ab53149/' target="_blank"><img alt='Linkedin Logo' src={LINKEDIN} /></a>
                <a href='https://www.instagram.com/_jrdn.a/?hl=en' target="_blank"><img alt='Instagram Logo' src={INSTAGRAM} /></a>
            </div>
        </header>
    )
}

export default Header;