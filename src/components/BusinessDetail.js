import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Yelp from '../Yelp';
import './BusinessDetail.css';

function BusinessDetail() {
  const { id } = useParams();
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    Yelp.getBusinessDetails(id).then(setBusiness);
  }, [id]);

  if (!business) {
    return <div className="BusinessDetail-loading">Loading...</div>;
  }

  return (
    <div className="BusinessDetail">
      <div className="BusinessDetail-header">
        <h2>{business.name}</h2>
        <p className="BusinessDetail-rating">
          Rating: {business.rating} stars | {business.review_count} reviews
        </p>
      </div>
      <div className="BusinessDetail-content">
        <img src={business.image_url} alt={business.name} />
        <div className="BusinessDetail-info">
          <p><strong>Address:</strong> {business.location.address1}, {business.location.city}, {business.location.state} {business.location.zip_code}</p>
          <p><strong>Phone:</strong> {business.phone}</p>
          <p><strong>Price:</strong> {business.price}</p>
          <p><strong>Category:</strong> {business.categories.map(category => category.title).join(', ')}</p>
          <p><strong>Hours:</strong></p>
          {business.hours ? (
            <ul>
              {business.hours[0].open.map((hour, index) => (
                <li key={index}>{`Day ${hour.day}: ${hour.start} - ${hour.end}`}</li>
              ))}
            </ul>
          ) : (
            <p>No hours available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BusinessDetail;
