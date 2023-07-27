

function Gallery({ images }) {

    return (
        <section className='project-gallery'>
            <section className='gallery-section-1'>
                <h2>Jonzin Film Festival</h2>
                <div className="gallery1">
                    <img src={images[0]} />
                </div>
            </section>

            <section className='gallery-section-2'>
                <h2>Bleak Film Festival</h2>
                <div className="gallery2">
                    <img src={images[1]} />
                </div>
            </section>
        </section >

    )
}

export default Gallery