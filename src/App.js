import React, { useState, useEffect } from 'react';
import data from './data';
import List from './List';
function App() {
  const [birthdays, setBirthdays] = useState(data);

  const clearBirthday = ()=>{
    setBirthdays([]);
  }
  
  return (
    <div className='inner-container'>
      <h3 className='head-text'>{birthdays.length} birthdays today</h3>
      <List birthdayList={birthdays}/>
      <button className='btn' onClick={clearBirthday}>Clear All</button>

    </div>
  
  );
}

export default App;
