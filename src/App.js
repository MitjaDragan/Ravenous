import React, { useState, useEffect } from 'react';
import './App.css';
import './styles/themes.css';
import Homepage from './components/Homepage';
import BusinessList from './components/BusinessList';
import BusinessDetail from './components/BusinessDetail';
import ThemeToggle from './components/ThemeToggle';
import SearchBar from './components/SearchBar';
import Yelp from './Yelp';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const [businesses, setBusinesses] = useState([]);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = theme + '-theme';
  }, [theme]);

  const searchYelp = (term, location, sortBy) => {
    Yelp.search(term, location, sortBy).then(businesses => {
      setBusinesses(businesses);
    });
  };

  return (
    <Router>
      <div className="App">
        <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
        <SearchBar searchYelp={searchYelp} />
        <Routes>
          <Route path="/" 
            element={
              <>
                <Homepage searchYelp={searchYelp} />
              </>
            } 
          />
          <Route
            path="/businesses"
            element={
              <>
                <BusinessList businesses={businesses} />
              </>
            }
          />
          <Route path="/business/:id" element={<BusinessDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
