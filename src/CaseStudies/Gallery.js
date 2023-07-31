import { useState } from "react"

function Gallery({ images, techstack }) {


    return (
        <section className='project-gallery'>
            <section className='gallery-section-1'>
                <h2>{techstack[0]}</h2>
                <div className="gallery1">
                    <img src={images[0]} />
                </div>
            </section>
            <section className='gallery-section-2'>
                <h2>{techstack[1]}</h2>
                <div className="gallery2">
                    <img src={images[1]} />
                </div>
            </section>
        </section >
    )
}

export default Gallery