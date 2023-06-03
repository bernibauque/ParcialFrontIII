import React from 'react';

const Card = ({ name, color }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p style={{ color }}>{`Color Favorito: ${color}`}</p>
    </div>
  );
};

export default Card;

