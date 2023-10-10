
import HeroImageLeft from '../../Images/makestuff.png'
import Designer from '../../Images/Name-inflate.png'
import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link'


const RightColumn = () => {
    const [underLineColor, setUnderLineColor] = useState('white')

    const hoverEnter = () => {
        setUnderLineColor('#fc7a5b')
    }

    const hoverLeave = () => {
        setUnderLineColor('white')
    }

    return (
        <section className='right-column' >
            <Link className='contact-button-main' to='#contact'>
                <div className='contact-button' onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
                    CONTACT
                    <div className='contact-underline' style={{ background: `${underLineColor}` }} />
                </div>
            </Link>
            <div className='hero-title'>
                <h1>Hello I'm</h1>
                <div className='hero-title-images'><img src={Designer} alt='Hero typography' ></img></div>
                <p>Developer // Designer // Dog Enthusiast</p>
            </div>
            <img src={HeroImageLeft} alt='Illustrated dog with box on head'></img>
        </section>

    )
}

export default RightColumn