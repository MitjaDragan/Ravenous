import React from 'react';
import './BusinessList.css';
import Business from './Business';

const businesses = [
    {
        imageSrc: 'https://via.placeholder.com/150',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90
    },
    {
        imageSrc: 'https://via.placeholder.com/150',
        name: 'The Taco Place',
        address: '123 Taco Lane',
        city: 'Taco Town',
        state: 'TX',
        zipCode: '78945',
        category: 'Mexican',
        rating: 4.7,
        reviewCount: 120
    },
    {
        imageSrc: 'https://via.placeholder.com/150',
        name: 'Burger Bonanza',
        address: '456 Burger Blvd',
        city: 'Burger City',
        state: 'CA',
        zipCode: '90210',
        category: 'American',
        rating: 4.3,
        reviewCount: 75
    },
    // Add more businesses as needed
];

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {businesses.map((business, index) => {
                    return <Business key={index} business={business} />;
                })}
            </div>
        );
    }
}

export default BusinessList;
