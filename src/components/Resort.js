import React from 'react';
import '../SCSS/Resort.scss'
import img1 from '../assets/resortImages/1.jpg'
import { Link } from 'react-router-dom';
const Resort = (props) => {
  return (
    <div>
        <div className="card">
            <div className='row'>
            <div className='col-4'>
            <img className="card-img" src={props.element.img} alt="Card image cap" />
            </div>
            <div className='col-4'>
            <div className="card-body">
              <div className='name'>
                <h5 className="card-title">{props.element.name}</h5><p>{props.element.address}</p>
                </div>
                <div className='keypoint'>
                  <h6>Crown Point</h6>
                  <ul>
                    <li>easy to reach from air port</li>
                    <li>close to downtown</li>
                  </ul>
                  </div>
                <div className='rating'>
                <span className="badge bg-success">8.5</span>
                <span><b>Fabulous</b></span>
                </div>
            </div>
                </div>
                <div className='col-4'>
                  <div className='goto'>
                    <span className = 'price'><b> {props.element.price} CAD</b></span>
                    <p className='text-success'>free cancellation</p>
                <Link to="" className="btn btn-primary rounded-pill">Book Now </Link>
                </div>
                </div>
            
            </div>
        </div>
    </div>
  );
}

export default Resort;
