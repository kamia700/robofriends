import React from 'react';
import Card from './Card';

const CardList = ( { robots } ) => {
  // const { name, email, id } = props;
  // if (true) {throw new Error('Noooo')}
  return (
    <div className='tc'>
      { 
        robots.map((user, index) => {
          return (
            <Card 
            key={index} 
            id={ robots[index].id } 
            name={ robots[index].name } 
            email={ robots[index].email} />
          );
        })
      }
    </div>
  );
}

export default CardList;