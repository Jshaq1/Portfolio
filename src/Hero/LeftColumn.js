import HeroImageLeft from '../Images/HeroImageLeft.png'





const LeftColumn = () => {



    return (
        <section className='left-column'>
            <img src={HeroImageLeft}></img>
            <div className='hero-left-text'>
                <p>I am a <span>developer</span> and <span>designer</span> from Perth, Western Australia who enjoys new technology and taking boring concepts and making them fun and pleasant to look at. </p>
            </div>
        </section>
    )
}

export default LeftColumn