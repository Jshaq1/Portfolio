
import HeroImageLeft from '../Images/HeroImageLeft.png'
import Designer from '../Images/Name-inflate.png'

const RightColumn = () => {



    return (
        <section className='right-column' >
            <div className='contact-button'>
                <h1>CONTACT</h1>
            </div>
            <div className='hero-title'>
                <h1>Hello Im</h1>
                <div className='hero-title-images'><img src={Designer}></img></div>
                <p>Developer // Graphic Designer // Dog Enthusiast</p>
            </div>

            <img src={HeroImageLeft}></img>
        </section>
    )
}

export default RightColumn