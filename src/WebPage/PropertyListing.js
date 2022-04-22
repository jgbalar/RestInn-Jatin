import React from 'react';
import '../PageScss/PropertyListing.scss'
import FilteredItem from '../components/FilteredItem'
import Filter from '../components/Filter';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
const PropertyListing = () => {
 let params = useParams();
 const [data1,setData1] = useState([{id:"625c86e0007c7b3cc94f3e3f",
 img:"zxc/awe",
 title:"hotel2",
 description:"5 star hotel",
 price:"$1400",
 location:{streetAddress:"1321 park Avenue",city:"Toronto",state:"Ontario",country:"Canada",zip:"L6R3W9"},
 type:"hotel",
 rules:"No pets allows, No smoking inside room",
 amenities:"Wifi, Mini Bar, Centeral Heating, Laundary",
 bestseller:false}
])
  const [data,setData] = useState([{id:"",
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
useEffect(()=>{
  fetch("https://backendrestinn.herokuapp.com/api/properties/"+params.variable).then(response => response.json()).then(json=>{
    setData1(json);
  }).catch(err=>{
    console.log(err);
  })
  
},[])
  return (
    <div>
      <header><Header setData={setData}/></header>
      <main>
      <div className='parent'>
        <Filter />  
        <FilteredItem data={data1}  />
      </div>
      </main>
      <footer><Footer /></footer>
    </div>
  );
}

export default PropertyListing;
