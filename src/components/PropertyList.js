import React from 'react';
import Property from './Property';
import '../SCSS/PropertyList.scss';
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

const PropertyList = () => {


  const [list,setList] = useState([{
    "id" : 0,
    "name" : "",
    "description" : "",
    "list" :[]
  }])
  let count = 0;
  let row = 0;

  useEffect(()=>{
    fetch("https://backendrestinn.herokuapp.com/api/propertydescription").then(response =>response.json()).then(json=>{
      setList(json)
    }).catch(err=>{
      console.log(err);
    })
  },[])
  console.log("list",list);
  row = _rowCount(list);
  return (
  <div className='property'>
      <h3>Property Selection Section</h3>
        { (
            ()=>{
              let count = 0;
              let x = [];
              for(let i = 0;i<row;i++){
                  x.push(<div className='row row-sm-3 g-2'>
                  {list.slice(count, count+4).map((element)=>{
                    return(
                    <Property key ={count++} id = {element.id} type = {element.type} img = {element.img} name = {element.type} description = {element.description} list = {element.list} />
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

export default PropertyList;
