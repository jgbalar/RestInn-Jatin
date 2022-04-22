import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyDescription from '../components/PropertyDescription'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
const PropertyDescriptionPage = () => {
  const[data1,setData1]=useState("")
  let params = useParams();
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
  useEffect(async()=>{
   let abc = await fetch(`https://backendrestinn.herokuapp.com/api/property/title?title=${params.name}`)
    abc = await abc.json()
    setData(abc)
  },[])
  return (
    <div>
        <header><Header setData={setData1} /></header>
        <main><PropertyDescription name = {data[0].title} price = {data[0].price} key = {data[0].id} address = {data[0].location.streetAddress} img = {data[0].img} /></main>
        <footer><Footer /></footer>  
      
    </div>
  );
}

export default PropertyDescriptionPage;
