import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import webprojects from './ProjectsData'
import '../../css/slider.css'
import { Link } from 'react-router-dom';


const Slider = () => {
    const [width, setWidth] = useState(0)
    const carousel = useRef()
    const imageWidth = useRef()

    useEffect(() => {
        setWidth((carousel.current.scrollWidth - carousel.current.offsetWidth))
    }, [])

    return (
        <motion.div
            className='carousel'
            ref={carousel}
        >
            <motion.div
                drag='x'
                dragConstraints={{ right: 0, left: 0 - width }}
                whileTap={{ cursor: 'grabbing' }}
                className='inner-carousel'>
                {webprojects.map((project, idx) => {
                    return (
                        <motion.div key={idx} className='item'>
                            <div className='project-card'>
                                <div className='project-details'>
                                    <h2>{project.title}</h2>
                                    <Link className='project-links' to={`/work/${project.title}`}><button>{project.categories.toUpperCase()}</button></Link>
                                    <p>{project.desc}</p>
                                </div>
                                <img src={project.image} ref={imageWidth} alt=''></img>
                            </div>

                        </motion.div>
                    )
                })}
            </motion.div>
        </motion.div>
    )

}
export default Slider;