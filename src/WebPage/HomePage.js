import React from 'react';
import '../PageScss/HomePage.scss';
import Header from '../components/Header.js'
import Hero from '../components/Hero.js'
import BestSellerList from '../components/BestSellerList.js'
import ProperyList from '../components/PropertyList.js'
import Footer from '../components/Footer.js'
import { useState } from 'react';

const HomePage = () => {
  const[data1,setData1]=useState("")
  return (
    <div>
        <header><Header  setData={setData1}/></header>
            <main>
           
            <div className='property'>
                <Hero />
                <ProperyList />
                <BestSellerList />
            </div> 
            </main>
        <footer><Footer /></footer> 
     </div>
  );
}

export default HomePage;
