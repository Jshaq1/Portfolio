import Slider from './Slider'
import { useRef, useEffect, useState } from 'react';

const Carousel = () => {
    const [underLineW, setUnderlineW] = useState()
    const viewAll = useRef()

    useEffect(() => {
        setUnderlineW(viewAll.current.offsetWidth / 3)
    }, [])

    const setWidth = () => {
        setUnderlineW(viewAll.current.offsetWidth)
    }

    const resetWidth = () => {
        setUnderlineW(viewAll.current.offsetWidth / 3)
    }


    return (
        <section className='carousel-container'>

            <section className='carousel-inner'>
                <Slider></Slider>
                <a
                    className='view-all'
                    href='https://github.com/Jshaq1'
                    ref={viewAll}
                    onMouseEnter={setWidth}
                    onMouseLeave={resetWidth}
                >VIEW ALL</a>
                <div
                    className='underline'
                    style={{
                        width: `${underLineW}px`,

                    }}
                ></div>
            </section>


        </section>

    )
}

export default Carousel;