import React from 'react';

function Simpsons({simpson} ) {
    
  return (
    simpson && (
      <div className='DisplayEmployee'>
        <ul>
          <li>Quote: {simpson.quote}</li>
          <li>
            Character: {simpson.character}
          </li>
          <img src= {simpson.image}></img>
        </ul>
      </div>
    )
  );
}

export default Simpsons;