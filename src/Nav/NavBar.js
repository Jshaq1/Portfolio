import Header from "./Header";
import '../CSS/nav.css'
import React, { useState, useEffect } from 'react';


function NavBar() {
    const [hideNavState, setHideNavState] = useState(false)

    const handleHeaderClick = () => {
        setHideNavState(!hideNavState)
    }

    return (
        <nav className={hideNavState === false ? 'side-menu-section-2 nav-hidden' : 'side-menu-section-2'} >
            <section className='side-menu-wrapper' >
                <section className='side-menu-content-3'>
                    <h1 className='logo'>Jordan</h1>
                    <p>Purpose driven Junior front-end developer and aspiring UI designer. With a background in graphic design and a keen interest in
                        the way people interact with technology. Venturing into software developement I strive to seek out opportunities
                        to bring creativity and new perspective to projects that deserve to be exciting, enjoyable and accessible. I am
                        constantly on the lookout for new inspiration and technologies to enable creativity and usability in my work.
                        Simply put I love to take something ordinary and making it exciting and usable.</p>
                    {/* <NavLinks></NavLinks> */}
                    {/* <ContactButton></ContactButton> */}
                </section>
            </section>
            <Header
                onClick={handleHeaderClick}
            ></Header>
        </nav>
    )
}

export default NavBar;