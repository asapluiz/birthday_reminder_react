import React from 'react';

const List = ({birthdayList}) => {
  return (
    <div className='items-container'>
      {
        
        birthdayList.map((e)=>(
          <div key={e.id} className="items">
            
            <img src={e.image} alt="birthday person" className='image'/>
            
            <div className='items-text'>
                <h2 className='item-text-head'>{e.name}</h2>
                <p className='item-text-body'>{e.age} years</p>
            </div>
          </div>
        ))
      }
      
    </div>
  );
};

export default List;
