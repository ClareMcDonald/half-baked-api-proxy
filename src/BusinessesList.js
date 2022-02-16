import React from 'react';

export default function BusinessesList({ businesses }) {
  return (
    <div>
      {businesses.map((business, i) => <div key={business + i}>
        <h3>{business.name}</h3>
        <img src={business.image_url} />
        <p>Rating: {business.rating}</p>
        <p>Price: {business.price}</p>
      </div>)}
    </div>
  );
}
