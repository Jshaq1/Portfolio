import HeroImageLeft from '../Images/jordan.jpeg'





const LeftColumn = () => {



    return (
        <section className='left-column'>
            <div className='image-container'>
                <img src={HeroImageLeft}></img>
            </div>
            <div className='hero-left-text'>
                <p>I am a <span>developer</span> and <span>designer</span> from Perth, Western Australia who enjoys new technology and taking boring concepts and making them fun and pleasant to look at. </p>
            </div>
        </section>
    )
}

export default LeftColumn