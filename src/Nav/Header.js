import GITHUB from '../Images/github-sign (1).png'
import LINKEDIN from '../Images/linkedin.png'
import INSTAGRAM from '../Images/instagram.png'
import { Squash as Hamburger } from 'hamburger-react'
import LOGO from '../Images/logo.png'
import { HashLink as Link } from 'react-router-hash-link'


function Header({ onClick, hamBurgerStatus }) {


    return (
        <header className={hamBurgerStatus ? 'side-menu active' : 'side-menu'}>
            <Link className='logo' to='/#hero'><img alt='logo' src={LOGO} /></Link>
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
                <a href='https://github.com/Jshaq1' target="_blank" rel="noreferrer"><img alt='Github Logo' src={GITHUB} /></a>
                <a href='https://www.linkedin.com/in/jordan-allen-36ab53149/' target="_blank" rel="noreferrer"><img alt='Linkedin Logo' src={LINKEDIN} /></a>
                {/* <a href='https://www.instagram.com/_jrdn.a/?hl=en' target="_blank" rel="noreferrer"><img alt='Instagram Logo' src={INSTAGRAM} /></a> */}
            </div>
        </header>
    )
}

export default Header;