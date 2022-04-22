import React from 'react';
import Filter from '../components/Filter';
import Resort from '../components/Resort'
import FilteredItem from '../components/FilteredItem';
import '../PageScss/PropertyTypePage.scss'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AllItems from '../components/AllItems';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
const PropertyTypePage = () => {
  const[data1,setData1]=useState("")
  const params = useParams();
    let a = [];
    let count = 0;
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
  
  if(params.data){
    fetch(`https://backendrestinn.herokuapp.com/api/properties/${params.data.toLocaleLowerCase()}`).then(response => response.json()).then(json=>{
      setData(json)
    }).catch(err=>{
      console.log(err);
    })
  }else{
    fetch("https://backendrestinn.herokuapp.com/api/properties").then(response => response.json()).then(json=>{ 
      setData(json);
    }).catch(err=>{
      console.log(err);
    })
  }
  
    
  },[])
 
  return (
    <div>
        <Header setData ={setData} />
      <div className='parent'>
      <Filter/> 
      {
        (data[0].id!=="")?(
          <div className='container border'>
             {
                 data.map((element1)=>{
                      return(
                          <Resort element = {element1} key = {count++} />
                      );
                    
                 })
             }
         </div>
        ):(<h2 style={{"marginLeft" : "20px","marginTop" : "20px" }}>There is no property {params.data}</h2>)
      } 
      
      
      </div>
      <Footer />
    </div>
  );
}

export default PropertyTypePage;
