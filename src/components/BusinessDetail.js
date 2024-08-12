import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Yelp from '../Yelp';

function BusinessDetail() {
  const { id } = useParams();
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    Yelp.getBusinessDetails(id).then(setBusiness);
  }, [id]);

  if (!business) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{business.name}</h2>
      <img src={business.photos ? business.photos[0] : business.image_url} alt={business.name} />
      <p>{business.address}</p>
      <p>{business.city}, {business.state} {business.zip_code}</p>
      <p>{business.phone}</p>
      <p>Rating: {business.rating} stars</p>
      <p>Price: {business.price}</p>
      <p>Hours: {business.hours ? business.hours[0].open.map(hour => (
          <div key={hour.day}>{`Day ${hour.day}: ${hour.start} - ${hour.end}`}</div>
        )) : 'No hours available'}
      </p>
    </div>
  );
}

export default BusinessDetail;
