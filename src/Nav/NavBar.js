import Header from "./Header";
import '../CSS/nav.css'
import React, { useState } from 'react';
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link'
import BOX from '../Images/handbox.png'




function NavBar() {
    const [hideNavState, setHideNavState] = useState(false)
    const [isOpen, setOpen] = useState(false)
    const [navState, setNavState] = useState('/')


    const handleHeaderClick = () => {
        setHideNavState(!hideNavState)
        setOpen(!isOpen)
    }


    return (
        <nav className={hideNavState === false ? 'side-menu-section-2 nav-hidden' : 'side-menu-section-2'} >
            <section className='side-menu-wrapper' >
                <section className={isOpen ? 'side-menu-content-3 side-menu-content-3-active' : 'side-menu-content-3'}>
                    <section className="nav-link-container">
                        <Link className='nav-links' to='/#hero' onClick={handleHeaderClick}>Home </Link>
                        <Link className='nav-links' to='/#work' onClick={handleHeaderClick}>Works</Link>
                        <Link className='nav-links' to='/#about' onClick={handleHeaderClick}>About</Link>
                        <Link className='nav-links' to='/#contact' onClick={handleHeaderClick}>Contact</Link>
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