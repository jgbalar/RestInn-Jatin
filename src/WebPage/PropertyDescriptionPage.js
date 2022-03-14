import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyDescription from '../components/PropertyDescription'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
const PropertyDescriptionPage = () => {
  let params = useParams();
  const [data,setData] = useState([{"id":0,
  name: "",
  description : ""
}
])
  useEffect(()=>{
    fetch("http://localhost:5000/property_description").then(response => response.json()).then(json=>{
      let abc = json.filter((element)=> element.name == params.name)
      setData(abc);
    }).catch(err=>{
      console.log(err);
    })
    
  },[])
  return (
    <div>
        <header><Header /></header>
        <main><PropertyDescription name = {data[0].name} price = {data[0].price} key = {data[0].id} address = {data[0].address} img = {data[0].img} /></main>
        <footer><Footer /></footer>  
      
    </div>
  );
}

export default PropertyDescriptionPage;
