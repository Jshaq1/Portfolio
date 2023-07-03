import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import images from './images'
import '../CSS/slider.css'


function Slider() {
    const [width, setWidth] = useState(0)
    const carousel = useRef()
    const imageWidth = useRef()

    useEffect(() => {
        setWidth((carousel.current.scrollWidth - carousel.current.offsetWidth))
        console.log(imageWidth.current.width)
    }, [])

    return (
        <motion.div
            className='carousel'
            ref={carousel}
        >
            <motion.div
                drag='x'
                dragConstraints={{ right: 0, left: -width }}
                whileTap={{ cursor: 'grabbing' }}
                className='inner-carousel'>
                {images.map((image, idx) => {
                    return (
                        <motion.div key={idx} className='item'>
                            <img src={image} ref={imageWidth} alt=''></img>
                        </motion.div>
                    )
                })}
            </motion.div>
        </motion.div>
    )

}
export default Slider;