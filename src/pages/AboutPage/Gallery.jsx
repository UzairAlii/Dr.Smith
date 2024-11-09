import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Gallery = ({ galleryImages }) => {
    const [index, setIndex] = useState(0);
    const [fullImage, setFullImage] = useState(false);
    const intervalId = useRef(null); // useRef to persist interval ID across renders

    const openFullScreen = (index) => {
        setIndex(index);
        setFullImage(true);
        startAutoSlide();  // Start auto-slide when fullscreen is opened
    };

    const closeFullScreen = () => {
        setFullImage(false);
        clearInterval(intervalId.current);  // Clear the interval when fullscreen is closed
    };

    const prevImg = () => {
        setIndex(prevIndex => prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1);
    };

    const nextImg = () => {
        setIndex(prevIndex => prevIndex + 1 === galleryImages.length ? 0 : prevIndex + 1);
    };

    const startAutoSlide = () => {
        // Clear any existing interval before starting a new one
        clearInterval(intervalId.current);
        intervalId.current = setInterval(() => {
            nextImg();  // Move to the next image
        }, 5000);
    };

    useEffect(() => {
        return () => clearInterval(intervalId.current);  // Clear interval on component unmount
    }, []);


    return (

        <div className="gallery-container">
            <h3>Explore Our units</h3>
            <h1>Gallery</h1>
            <div className="gallery-items">

            {fullImage &&
            <div className='slider'>
                <FontAwesomeIcon icon={faXmark} className='close gallery-icons' onClick={()=> closeFullScreen()} />
                <FontAwesomeIcon icon={faChevronLeft} className='prev gallery-icons' onClick={()=> prevImg()} />
                <FontAwesomeIcon icon={faChevronRight} className='next gallery-icons' onClick={()=> nextImg()} />
                <div className="fullscreenImage">
                    <img src= {galleryImages[index].img}/>
                </div>
                <div className="coutingOfImg">
                    <p>{index +1}/{galleryImages.length}</p>
                </div>
            </div>
        }


                {galleryImages && galleryImages.map((slide, index) => {
                    return <div className='all-images' key={index} onClick={() => openFullScreen(index)}>
                        <img className='gallery-imgs' src={slide.img} alt=""
                            onClick={() => openFullScreen()}
                        />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Gallery