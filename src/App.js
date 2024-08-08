import React, { useState } from 'react';
import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import Yelp from './Yelp';

function App() {
  const [businesses, setBusinesses] = useState([]);  // Initialized to an empty array

  const searchYelp = (term, location, sortBy) => {
    Yelp.search(term, location, sortBy).then(businesses => {
      setBusinesses(businesses);
    });
  };

  return (
    <div className="App">
      <h1>Ravenous</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
