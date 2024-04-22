import React, { useState, useRef } from 'react';
import './style.css'; // Import the CSS file

function BlogCarousel() {
    const [indexValue, setIndexValue] = useState(1);
    const imagesRef = useRef(null);

    const btmSlide = (e) => {
        showImg(1 + e);
    };


    const sideSlide = (e) => {
        showImg(indexValue + e);
    };

    const showImg = (e) => {
        const images = imagesRef.current.querySelectorAll('img');
        const sliders = imagesRef.current.querySelectorAll('.btm-slides span');

        if (e > images.length) setIndexValue(1);
        else if (e < 1) setIndexValue(images.length);
        else setIndexValue(e);

        images.forEach((img) => {
            img.style.display = 'none';
        });

        sliders.forEach((slider) => {
            slider.style.background = 'rgba(255, 255, 255, 0.1)';
        });

        images[indexValue - 1].style.display = 'block';
        sliders[indexValue - 1].style.background = 'white';
    };

    return (
        <div className="content">
            <div ref={imagesRef} className="images">
                <img src="https://live.staticflickr.com/3863/15003087410_59d64be40f_c.jpg" alt="Image 1" />
                <img src="https://live.staticflickr.com/4284/34981059850_afb8f767bc_z.jpg" alt="Image 2" />
                <img src="https://live.staticflickr.com/2919/13545828403_ae472bc41d_z.jpg" alt="Image 3" />
                <img src="https://www.growables.org/information/TropicalFruit/images/PapayaNelson10.jpg" alt="Image 4" />
                <img src="https://www.growables.org/information/TropicalFruit/images/PapayaNelson10.jpg" alt="Image 5" />
            </div>
            <div className="btm-slides">
                <span onClick={() => btmSlide(1)}></span>
                <span onClick={() => btmSlide(2)}></span>
                <span onClick={() => btmSlide(3)}></span>
                <span onClick={() => btmSlide(4)}></span>
                <span onClick={() => btmSlide(5)}></span>
            </div>
            <div className="sliders left" onClick={() => sideSlide(-1)}>
                <span className="fas fa-angle-left"></span>
            </div>
            <div className="sliders right" onClick={() => sideSlide(1)}>
                <span className="fas fa-angle-right"></span>
            </div>
        </div>
    );
}

export default BlogCarousel;
