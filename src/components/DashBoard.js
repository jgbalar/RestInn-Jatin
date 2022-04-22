import React from 'react';
import Footer from './Footer';
import Header from './Header';
import SetCookies from '../cookies/SetCookies';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
const DashBoard = () => {
const [user,setUser] = useState({
  id: "",
  name: "",
  email: "",
  password: "",
  address: ""
})
  const params = useParams()
  useEffect(()=>{
      fetch("https://backendrestinn.herokuapp.com/api/customer/"+SetCookies.get('login')).then((response)=>response.json()).then((json)=>{
          setUser(json)
          console.log('qqqqqqqqqqqqqq',json);
      })
  },[])
 
  return (
    <>  
    <Header />
    <div className='form1'>
        <div className='ff'>
             <div className="form-inner">
                <h2>Hello</h2>
                 <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name = "name" id = "name" defaultValue={user.name} readOnly/>
                </div>
                 <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" defaultValue={user.email} readOnly/>
                </div>
                 <div className="form-group">
                    <label htmlFor="password">Address</label>
                    <input type="text" name="password" id="password" defaultValue={user.address} readOnly />
                </div>
            </div>
            </div>
  
    </div>
        <Footer />
       </>
  );
}

export default DashBoard;
