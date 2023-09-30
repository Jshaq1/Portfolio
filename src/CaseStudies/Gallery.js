
import { LazyLoadImage } from "react-lazy-load-image-component";
function Gallery({ images, techstack }) {


    return (
        <section className='project-gallery'>
            <section className='gallery-section-1'>
                <h2>{techstack[0]}</h2>
                <div className="gallery1">
                    <LazyLoadImage src={images[0]}
                        alt="Gallery`"
                    />
                </div>
            </section>
            <section className='gallery-section-2'>
                <h2>{techstack[1]}</h2>
                <div className="gallery2">
                    <LazyLoadImage src={images[1]}
                        alt="Gallery1"
                    />
                </div>
            </section>
        </section >
    )
}

export default Gallery