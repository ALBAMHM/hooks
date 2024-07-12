import React from 'react';

const Character = ({ name, image }) => {
  return (
    <div>
      <p>{name}</p>
      <img src={image} alt={name} />
    </div>
  );
};

export default Character;