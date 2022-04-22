import React from 'react';
import '../SCSS/SignUp.scss'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const [login, setLogin] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigate()
    const handleClick = () => {
        let result = { name, email, password,address }
        fetch("https://backendrestinn.herokuapp.com/api/customer/registration", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(result)
        }).then(response => {
            if (response.status !== 200) {
                setLogin(false)
                alert('there is someting wrong with username or password')
            }
            else {
                navigation("/login")
            }

        }

        )
    }
  return (
    <div className='signup'>
     <div className='fff'>
             <div className="form-inner">
                <h2>Sign up</h2>
                {/* ERROR */}
                {
                    (login === false) ? (<div>unsuccessful Registration</div>) : ""
                }
                 <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                 <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                    <span className='strong'>your password must be strong</span>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name = "name" id = "name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Address</label>
                    <input type="text" name = "name" id = "name"onChange={(e) => setAddress(e.target.value)}/>
                </div>
                
              
                <div className="form-group">
                <span className='forgot'>
                    <input type='checkbox' id = 'stay' name = 'checkbox' value = 'checked' />
                    <label htmlFor="stay">keep me Logged IN</label>
                    </span>
                    <span className='term'>by signing up you accept company's <a href='#'>terms and conditions</a> and <a href='#'>Privacy Policy</a></span>
                <button type="submit"  onClick={handleClick}>Sign Up</button>
                <span className='create'>Already have an account? <a href='#'>Log In</a> </span>
                </div>
            </div>
            </div>
    </div>
  );
}

export default SignUp;
