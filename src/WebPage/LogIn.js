import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../SCSS/LogIn.scss'
import SetCookies from '../cookies/SetCookies'
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
const LogIn = () => {
    const [login, setLogin] = useState(true)
    const [email, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigate()
    const handleClick = () => {
     
        let result = { email, password }
        fetch("https://backendrestinn.herokuapp.com/api/customer/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(result)
        }).then(response => {
            if (response.status !== 200) {
                setLogin(false)
                alert('invalid username and password')
            }
            else {
                response.json().then((json)=>{
                    SetCookies.set("login", json.id, { "path": "/" })
                    console.log('wwwwwwwwwww',SetCookies.get('login'));
                    navigation(`/dashboard/${SetCookies.get('login')}`)
                })
               
            }

        }

        )
    }
  return (
    <>  
    <Header />
    <div className='form1'>
        <div className='ff'>
             <div className="form-inner">
                <h2>Login</h2>
                {/* ERROR */}
                {
                                (login === false) ? (<div>unsuccessful login</div>) : ""
                            }
                 <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name = "name" id = "name"/>
                </div>
                 <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={(e) => { setUserName(e.target.value) }} />
                </div>
                 <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={(e) => { setPassword(e.target.value) }}/>
                </div>
                <span className='forgot'><a href='#'>Forgot Password</a></span>
                <button type="submit"  onClick={handleClick}>LogIn</button>
                <span className='create'>Don't have an account?<a href='#'>Sign up</a> </span>
            </div>
            </div>
  
    </div>
        <Footer />
       </>
  );
}

export default LogIn;
