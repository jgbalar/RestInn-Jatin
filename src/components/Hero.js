import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../SCSS/Hero.scss'
import {Carousel} from 'react-responsive-carousel'
import img1 from '../assets/resortImages/1.jpg'
import img2 from '../assets/resortImages/2.jpg'
import img3 from '../assets/resortImages/3.jpg'
import img4 from '../assets/resortImages/4.jpg'
import img5 from '../assets/resortImages/5.jpg'
const Hero = () => {
  return (
    <div className='hero'>
       <Carousel className = 'main'>
                <div>
                    <img src={img1} />
                    <p className="legend">Destination 1</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Destination 2</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Destination 3</p>
                </div>
                <div>
                    <img src={img4} />
                    <p className="legend">Destination 4</p>
                </div>
                <div>
                    <img src={img5} />
                    <p className="legend">Destination 5</p>
                </div>
            </Carousel>
    </div>
  );
}

export default Hero;
