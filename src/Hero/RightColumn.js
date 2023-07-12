
import HeroImageLeft from '../Images/HeroImageLeft.png'
import Designer from '../Images/Name-inflate.png'

const RightColumn = () => {



    return (
        <section className='right-column' >
            <div className='contact-button'>
                <a href='#'>CONTACT</a>
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