import React from 'react'
import ImageSlider, { Slide } from "react-auto-image-slider";

function HeaderSlider() {
    return (
        <div className=' max-h-[300px] bg-gray-600'>

            <ImageSlider effectDelay={500} autoPlayDelay={2000}>
                <Slide>
                    <img alt="img2" src="landscape.jpg" />
                </Slide>
                <Slide>
                    <img alt="img2" src="landscape2.JPG" />
                </Slide>
                <Slide>
                    <img alt="img1" src="landscape.JPG" />
                </Slide>
            </ImageSlider>
        </div>
    )
}

export default HeaderSlider