
import HeroImageLeft from '../Images/HeroImageLeft.png'
import Designer from '../Images/Name-inflate.png'
import { useRef, useEffect, useState } from 'react';


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
            <div className='contact-button'>
                <a href='#'
                    onMouseEnter={hoverEnter}
                    onMouseLeave={hoverLeave}>CONTACT</a>
                <div className='contact-underline'

                    style={{ background: `${underLineColor}` }}

                ></div>
            </div>
            <div className='hero-title'>
                <h1>Hello I'm</h1>
                <div className='hero-title-images'><img src={Designer}></img></div>

                <p>Developer // Designer // Dog Enthusiast</p>
            </div>

            <img src={HeroImageLeft}></img>
        </section>
    )
}

export default RightColumn