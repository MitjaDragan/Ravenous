import React, {useState} from 'react';
import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';

const mockBusinesses = [
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

function App() {
  const [businesses, setBusinesses] = useState(mockBusinesses);

  return (
    <div className="App">
      <h1>Ravenous</h1>
      <SearchBar />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
