import React from 'react';
import '../SCSS/SignUp.scss'
const SignUp = () => {
  return (
    <div className='signup'>
        <form>
             <div className="form-inner">
                <h2>Sign up</h2>
                {/* ERROR */}
                 <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email"/>
                </div>
                 <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"/>
                    <span className='strong'>your password must be strong</span>
                </div>
               
                <div className="form-group">
                    <label htmlFor="name">First Name:</label>
                    <input type="text" name = "name" id = "name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Last Name:</label>
                    <input type="text" name = "name" id = "name"/>
                </div>

                <span className='forgot'>
                    <input type='checkbox' id = 'stay' name = 'checkbox' value = 'checked' />
                    <label htmlFor="stay">keep me Logged IN</label>
                    </span>
                    <span className='term'>by signing up you accept company's <a href='#'>terms and conditions</a> and <a href='#'>Privacy Policy</a></span>
                <input type="submit" value="Sign Up"/>
                <span className='create'>Already have an account? <a href='#'>Log In</a> </span>
            </div>
        </form>
    </div>
  );
}

export default SignUp;
