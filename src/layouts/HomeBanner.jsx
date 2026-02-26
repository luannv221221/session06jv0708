import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
function HomeBanner() {
    return (
        <Carousel>
            <Carousel.Item>
                <img src='https://mihanoi.vn/wp-content/uploads/2024/12/cac-mau-banner-tet-dep-va-an-tuong-cho-quang-cao-va-chuc-tet-3.jpg' width={"100%"} />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src='https://thiepmung.com/uploads/worigin/2024/12/03/tao-banner-su-kien-tet-at-ty-2025-_9d3cb.jpg' width={"100%"} />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src='https://mihanoi.vn/wp-content/uploads/2024/12/cac-mau-banner-tet-dep-va-an-tuong-cho-quang-cao-va-chuc-tet-3.jpg' width={"100%"} />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default HomeBanner