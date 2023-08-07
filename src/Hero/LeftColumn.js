
import LOGO from '../Images/JRDN LOGO.png'




const LeftColumn = () => {



    return (
        <section className='left-column'>
            <div className='image-container'>
                <img src={LOGO} alt='Illustrated man with box on head, Jordan Logo'></img>
            </div>
            <div className='hero-left-text'>
                <p>A <span>developer</span> and <span>designer</span> from Western Australia who enjoys discovering new technology that helps me make anything more exciting, fun and pleasant to look at.</p>
            </div>
        </section>
    )
}

export default LeftColumn