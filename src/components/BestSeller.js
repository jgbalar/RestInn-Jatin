import React from 'react';
import img1 from '../assets/resortImages/1.jpg'
import '../SCSS/BestSeller.scss'
import { Link } from 'react-router-dom';

const BestSeller = (props) => {

  return (
    <div className="col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12 border rounded-3 c3">
    <img src={props.img} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <Link to={`/propertydescription/${props.name}`} className="btn">Search</Link>
    </div>
  </div>
  );
}

export default BestSeller;
