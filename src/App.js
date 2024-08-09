import React, { useState } from 'react';
import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import Yelp from './Yelp';
import BusinessDetail from './components/BusinessDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = (term, location, sortBy) => {
    Yelp.search(term, location, sortBy).then(businesses => {
      setBusinesses(businesses);
    });
  };

  return (
    <Router>
      <div className="App">
        <h1>Ravenous</h1>
        <SearchBar searchYelp={searchYelp} />
        <Routes>
          <Route path="/" element={<BusinessList businesses={businesses} />} />
          <Route path="/business/:id" element={<BusinessDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
