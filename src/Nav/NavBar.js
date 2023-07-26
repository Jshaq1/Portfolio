import Header from "./Header";
import '../CSS/nav.css'
import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import BOX from '../Images/handbox.png'




function NavBar() {
    const [hideNavState, setHideNavState] = useState(false)
    const [isOpen, setOpen] = useState(false)


    const handleHeaderClick = () => {
        setHideNavState(!hideNavState)
        setOpen(!isOpen)
    }


    return (
        <nav className={hideNavState === false ? 'side-menu-section-2 nav-hidden' : 'side-menu-section-2'} >
            <section className='side-menu-wrapper' >
                <section className={isOpen ? 'side-menu-content-3 side-menu-content-3-active' : 'side-menu-content-3'}>
                    <section className="nav-link-container">
                        <Link className={isOpen === false ? 'nav-links' : 'nav-links animate'} style={{ animationDelay: '0' }} to='/#hero' onClick={handleHeaderClick}>Home </Link>
                        <Link className={isOpen === false ? 'nav-links' : 'nav-links animate'} style={{ animationDelay: '.2s' }} to='/#work' onClick={handleHeaderClick}>Works</Link>
                        <Link className={isOpen === false ? 'nav-links' : 'nav-links animate'} style={{ animationDelay: '.4s' }} to='/#about' onClick={handleHeaderClick}>About</Link>
                        <Link className={isOpen === false ? 'nav-links' : 'nav-links animate'} style={{ animationDelay: '.6s' }} to='/#contact' onClick={handleHeaderClick}>Contact</Link>
                    </section>
                    <img src={BOX} alt='Box with a hand coming out reaching for a cable' />
                </section>
            </section>
            <Header
                onClick={handleHeaderClick}
                hamBurgerStatus={isOpen}
            ></Header>
        </nav>

    )
}

export default NavBar;