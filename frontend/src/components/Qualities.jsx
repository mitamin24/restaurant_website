import React from 'react';
import { data } from '../restApi.json';

const Qualities = () => {
  return (
    <section className='qualities' id='qualities'>
      <div className="container">
        {data[0].ourQualities.map((element, index) => (
          <div className='card' key={element.id || `key-${index}`}>
            <img src={element.image} alt={element.title} />
            <p className='title'>{element.title}</p>
            <p className='description'>{element.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Qualities;
