import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import SetCookies from '../cookies/SetCookies';
const Logout = () => {
    useEffect(() => {
        SetCookies.remove('login')
    }, [])

  return (
    <div>
        <Header/>
        <div>for login <Link to = "/login">click here </Link></div>
      <Footer />
    </div>
  );
}

export default Logout;
