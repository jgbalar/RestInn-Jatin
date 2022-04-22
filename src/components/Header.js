import React from 'react';
import '../SCSS/Header.scss';
import { Link } from 'react-router-dom';
import img11 from '../assets/resortImages/12.jpeg'
import SetCookies from '../cookies/SetCookies';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const Header = ({setData})=>{
  const params = useParams()
  const navigate = useNavigate();
  const[togle,setTogle] = useState(false)
  useEffect(()=>{
      if(SetCookies.get('login')){
        setTogle(true)
      }else{
        setTogle(false)
      }
  },[])
  const logOut = (event)=>{
    event.preventDefault();
    SetCookies.remove('login');
    setTogle(false)
    navigate('/');
  }

  const [data,setData1] = useState("")
const handleClick = async()=>{
 let property = await fetch(`https://backendrestinn.herokuapp.com/api/properties/${data.toLocaleLowerCase}`)
 if(property.status===200){
   property = await property.json()
   setData(property)
 }else{
   setData([{id:"",
   img:"",
   title:"",
   description:"",
   price:"",
   location:{streetAddress:"",city:"",state:"",country:"",zip:""},
   type:"",
   rules:"",
   amenities:"",
   bestseller:false}
  ])
 }
navigate(`/propertytypepage/${data}`);
}
    return(   
      (togle) ?
      (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid d-flex justify-content-between">
    <Link className="navbar-brand m" to="/"><img src ={img11} alt='.....' /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <div className='form'>
        <input className="form-control me-2" type="search" onChange={(e)=>{setData1(e.target.value)}} placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit" onClick={handleClick}>Search</button>
     </div>
      <ul className="navbar-nav mb-2 mb-lg-0">
      <li className="nav-item a">
          <a className="nav-link active" aria-current="page" href="/propertytypepage">Property</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link active"  aria-current="page" to="/dashboard">Dashboard</Link>
        </li>
        <li className="nav-item dropdown">
        <button  onClick={logOut} className="dropbtn1"   >Logout</button>
        </li>
      </ul>
    </div>
  </div>
</nav>            

</div>  ):( <div>
            <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid d-flex justify-content-between">
    <Link className="navbar-brand m" to="/"><img src ={img11} alt='.....' /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div className='form'>
        <input className="form-control me-2" type="search" placeholder="Search"onChange={(e)=>{setData1(e.target.value)}} aria-label="Search" />
        <button className="btn btn-outline-success" type="submit" onClick={handleClick}>Search</button>
      
      </div>
      <ul className="navbar-nav mb-2 mb-lg-0">
      <li className="nav-item a">
          <a className="nav-link active" aria-current="page" href="/propertytypepage">Property</a>
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

</div>)  
    );
}
export default Header;