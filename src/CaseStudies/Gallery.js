

function Gallery({ images }) {

    return (
        <section className="gallery">
            {images.map(img => {
                return <img src={img} />
            })}
        </section>

    )
}

export default Gallery