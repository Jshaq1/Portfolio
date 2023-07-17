import { useRef, useEffect, useState } from 'react';

function LeftCol() {
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
        <section>
            <section className='about-left-col'>
                <h1>ABOUT ME</h1>
                <a
                    href='https://chocolate-garnette-59.tiiny.site'
                    ref={viewAll}
                    onMouseEnter={setWidth}
                    onMouseLeave={resetWidth}
                    target='_blank'
                    rel="noreferrer"
                >VIEW RESUME</a>
                <div
                    className='underline'
                    style={{
                        width: `${underLineW}px`,

                    }}
                ></div>
                <p>Purpose driven Junior full-stack developer and aspiring UI designer. With a background in graphic design and a keen interest in the way people interact with technology I am partial to the front-end where I really use my experience. Venturing into software developement I strive to seek out opportunities to bring creativity and new perspective to projects that deserve to be exciting, enjoyable and accessible. I am constantly on the lookout for new inspiration and technologies to enable creativity and usability in my work. Simply put I love to take something ordinary and making it exciting, usable and most importantly fun.</p>
            </section>
        </section>
    )
}

export default LeftCol