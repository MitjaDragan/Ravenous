import React from 'react';
import { useParams } from 'react-router-dom';

function BusinessDetail() {
  const { id } = useParams();

  // For now, you can fetch or use a dummy business detail
  const business = {
    id: id,
    name: 'Sample Business',
    imageSrc: 'https://via.placeholder.com/150',
    address: '123 Test St',
    city: 'Test City',
    state: 'TS',
    zipCode: '12345',
    category: 'Test Category',
    rating: 4.5,
    reviewCount: 100,
    description: 'This is a sample description for the business.'
  };

  return (
    <div>
      <h2>{business.name}</h2>
      <img src={business.imageSrc} alt={business.name} />
      <p>{business.address}</p>
      <p>{business.city}, {business.state} {business.zipCode}</p>
      <p>{business.category}</p>
      <p>{business.rating} stars</p>
      <p>{business.reviewCount} reviews</p>
      <p>{business.description}</p>
    </div>
  );
}

export default BusinessDetail;
