import React from 'react'
import './ImageSlider.css'
import { Carousel } from 'react-bootstrap'

function ImageSlider() {
    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src="https://itechindia.co/wp-content/uploads/2021/11/main-banner1.jpeg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src="https://i1.wp.com/www.studentprojectguide.com/wp-content/uploads/2019/09/Library-management-system-synopsis-e1569435337531.jpg?fit=1284%2C856&ssl=1"
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageSlider
