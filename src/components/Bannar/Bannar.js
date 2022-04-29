import React from 'react';
import { Carousel } from 'react-bootstrap';

const Bannar = () => {
    const img1 = "https://klbtheme.com/groci/wp-content/uploads/2018/08/slider2.jpg"
    const img2 = "https://klbtheme.com/groci/wp-content/uploads/2018/08/slider1.jpg"
    const img3 = "https://img.freepik.com/free-photo/group-fresh-vegetables-fruits_135427-235.jpg?w=996"
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Bannar;