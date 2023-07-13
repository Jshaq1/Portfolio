import GITHUB from '../Images/github-sign (1).png'
import LINKEDIN from '../Images/linkedin.png'
import INSTAGRAM from '../Images/instagram.png'
import { Squash as Hamburger } from 'hamburger-react'



function Header({ onClick, hamBurgerStatus }) {


    return (
        <header className={hamBurgerStatus ? 'side-menu active' : 'side-menu'}>
            <a href='/#'>LOGO</a>
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
                <a href='https://github.com/Jshaq1'><img alt='Github Logo' src={GITHUB} /></a>
                <a href='https://www.linkedin.com/in/jordan-allen-36ab53149/'><img alt='Linkedin Logo' src={LINKEDIN} /></a>
                <a href='https://www.instagram.com/_jrdn.a/?hl=en'><img alt='Instagram Logo' src={INSTAGRAM} /></a>
            </div>
        </header>
    )
}

export default Header;