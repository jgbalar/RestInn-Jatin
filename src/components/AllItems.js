import React from 'react';
import '../SCSS/AllItem.scss'
import Resort from './Resort';

const AllItems = (props) => {
  return (
    <div className='item'>
         {props.element1?.map((element, key) => (
                element.list.map((el)=>{
                    return( <div key={key}>
                    <Resort element={element}/>
                </div>)
                })
                   
                ))}
      
    </div>
  );
}

export default AllItems;
