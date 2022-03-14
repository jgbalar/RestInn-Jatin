import React from 'react';
import '../SCSS/Header.scss';
import { Link } from 'react-router-dom';
import img11 from '../assets/resortImages/12.jpeg'

const Header = ()=>{
    return(   
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid d-flex justify-content-between">
    <Link className="navbar-brand m" to="/"><img src ={img11} alt='.....' /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <form className="d-flex me-auto">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <ul className="navbar-nav mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/propertytypepage">Property</Link>
        </li>
        <li className="nav-item dropdown">
        <div className="dropdown">
          <button className="dropbtn">Login/Signup</button>
        <div className="dropdown-content">
            <Link to="/login">Login</Link>
            <Link to="/sign-up">Signup</Link>
      </div>
      </div>
        </li>
      </ul>
    </div>
  </div>
</nav>            

</div>    
    );
}
export default Header;