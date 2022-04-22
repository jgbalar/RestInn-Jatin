import React from 'react';
import BestSeller from './BestSeller';
import '../SCSS/BestSellerList.scss'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

const _rowCount = (variable) =>{
  let j=3
  let count=1;
  for(let i = 0;i<variable.length-1;i++){
    if( j == i )  {
      j += 4;
      count++;
    }
  }
return count;
}

const BestSellerList = () => {
  const [data,setData] = useState([{id : 0,name : "", address : ""}])
  useEffect(()=>{
    fetch("https://backendrestinn.herokuapp.com/api/properties/bestseller?bestseller=true").then(response => response.json()).then(json=>{
      setData(json);
    }).catch(err=>{
      console.log(err);
    })
    
  },[])
 
    let count = 0;
  return (
    <div className='property1'>
    <h3>Best BestSeller Section</h3>
      { (
          ()=>{
            let count = 0;
            let x = [];
            for(let i = 0;i<_rowCount(data);i++){
                x.push(<div className='row'>
                {data.slice(count, count+4).map((element)=>{

                  return(
                    <BestSeller img = {element.img} name = {element.title} key ={element.id}/>
                  )
                })
                }
                </div>)
                count = count+4;
            }
            return x;
      }
      )()
      }
   
  </div>
  
  );
}

export default BestSellerList;
