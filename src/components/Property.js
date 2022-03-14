import React from 'react';
import '../SCSS/Property.scss'
import img1 from '../assets/resortImages/1.jpg'
import { Link } from 'react-router-dom';

const Property = (props) => {
  return (

    <div className="col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12 c2 border rounded-3 ">
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <Link to={`/property-sorting/${props.id}`} className="btn">Search</Link>
      </div>
    </div>

  );
}

export default Property;
