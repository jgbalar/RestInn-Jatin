import React from 'react';
import '../SCSS/LogIn.scss'

const LogIn = () => {
  return (
    <div className='form1'>
        <form>
             <div className="form-inner">
                <h2>Login</h2>
                {/* ERROR */}
                 <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name = "name" id = "name"/>
                </div>
                 <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email"/>
                </div>
                 <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"/>
                </div>
                <span className='forgot'><a href='#'>Forgot Password</a></span>
                <input type="submit" value="LogIn"/>
                <span className='create'>Don't have an account?<a href='#'>Sign up</a> </span>
            </div>
        </form>
      
    </div>
  );
}

export default LogIn;
