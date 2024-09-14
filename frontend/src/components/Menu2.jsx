import React from 'react';
import { data } from '../restApi.json';

const DishCard = ({ dish }) => (
  <div className="card">
    <img src={dish.image} alt={dish.title} />
    <div className="category">{dish.category}</div>
    <div className="card-content">
      <h3 className="card-title">{dish.title}</h3>
      <div className="price">{dish.price}</div>
    </div>
  </div>
);

const Menu2 = () => {
  return (
    <div className="container">
      <div className="grid">
        {data[0].menu2.map((element) => (
          <DishCard key={element.id} dish={element} />
        ))}
      </div>
    </div>
  );
};

export default Menu2;
