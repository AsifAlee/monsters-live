import React from 'react';
import './card.style.css'

const Card = (props) => 
  (<div className='card-container'>
      <img
        src={`https://robohash.org/${props.singleMonster.id}?set=set2`}
        alt="Monsters"  
      />   
      <h1>{props.singleMonster.name}</h1>
      <p>{props.singleMonster.name}</p>
  </div>)

export default Card;