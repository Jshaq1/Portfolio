import Header from "./Header";
import '../CSS/nav.css'
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
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
        <BrowserRouter>
            <nav className={hideNavState === false ? 'side-menu-section-2 nav-hidden' : 'side-menu-section-2'} >
                <section className='side-menu-wrapper' >
                    <section className={isOpen ? 'side-menu-content-3 side-menu-content-3-active' : 'side-menu-content-3'}>
                        <section className="nav-link-container">
                            <Link className='nav-links' to='#hero' onClick={handleHeaderClick}>Home. </Link>
                            <Link className='nav-links' to='#work' onClick={handleHeaderClick}>Works.</Link>
                            <Link className='nav-links' to='#about' onClick={handleHeaderClick}>About.</Link>
                            <Link className='nav-links' to='#contact' onClick={handleHeaderClick}>Contact.</Link>
                            {/* <a className='nav-links' target="_blank" rel="noreferrer" href='https://github.com/Jshaq1' onClick={handleHeaderClick}>Github. </a> */}
                            {/* <a className='nav-links' target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/jordan-allen-36ab53149/' onClick={handleHeaderClick}>Linkedin.</a> */}
                        </section>
                        <img src={BOX} alt='Box with a hand coming out reaching for a cable' />
                    </section>
                </section>
                <Header
                    onClick={handleHeaderClick}
                    hamBurgerStatus={isOpen}
                ></Header>
            </nav>
        </BrowserRouter>
    )
}

export default NavBar;