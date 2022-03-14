import React from 'react';
import '../SCSS/PropertyDescription.scss'
import img1 from '../assets/resortImages/1.jpg'
import { FaMapMarkerAlt } from 'react-icons/fa';
import img2 from '../assets/resortImages/13.jpg'

const PropertyDescription = (props) => {  
  return (

          <div className ='property'>
            <div className='prize'>
              <div className='desc'>
                <h3>{props.name}</h3>
                <p>3-star Hotel with outdoor pool, near pigeon point beach</p>
                <p className='text-success'>free local cuisines breakfast, free wifi, and free parking &#10003; free airport transfer &#10003; free cancellation</p>
                </div>
                <div className='desc1'>
                <span className = 'price'><b>&nbsp;&nbsp;&nbsp; ${props.price}</b></span>
                  <a href="#" className="btn btn-primary rounded-pill">Book Now </a>
                  </div>
              </div>
            <div className = 'description'>
              <div className='image'>
                  <img src={props.img} alt='location' />
              </div>
              <div className='information'>
              <div className='location'>
                <img src={img2} alt ='location' />
                <p>	<FaMapMarkerAlt /> {props.address}</p>
                <hr/>
                </div>
                <div className='review'>
                <div className='rating'>
                  <span className="badge bg-success">8.6</span>
                  <span className='text'>
                    <b>Fabulous</b>
                    <p>77 verified hotel.com reviews</p>
                    </span>
                    </div>
                <div className='customerreview'>
                <div className='customer'>
                  <p>I and my family enjoyed alot. The staff was very polite and helpful</p>
                  <p id = 'date'>jul,8,2020</p>
                  <hr/>
                  </div>  
                  <div className='customer'>
                  <p>I and my family enjoyed alot. The staff was very polite and helpful</p>
                  <p id = 'date'>jul,8,2020</p>
                  <hr/>
                  </div> 
                  <a href='#'>see all review</a>
                  </div>                 
                  </div>
              </div>  
            </div>
          </div>
  
  );
}

export default PropertyDescription;
