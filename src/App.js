import React, { useState, useEffect } from 'react';
import './App.css';
import './styles/themes.css';
import Homepage from './components/Homepage';
import BusinessList from './components/BusinessList';
import BusinessDetail from './components/BusinessDetail';
import ThemeToggle from './components/ThemeToggle';
import SearchBar from './components/SearchBar';
import Favorites from './components/Favorites';
import Yelp from './Yelp';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './context/AuthContext';
import darkLogo from './assets/images/logo.png';
import lightLogo from './assets/images/logo_white.png';

function App() {
  const [businesses, setBusinesses] = useState([]);
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = theme + '-theme';
  }, [theme]);

  const searchYelp = (term, location, sortBy) => {
    Yelp.search(term, location, sortBy).then((businesses) => {
      if (businesses) {
        setBusinesses(businesses);
      } else {
        console.error('No businesses found');
      }
    }).catch((error) => {
      console.error('Error fetching businesses:', error);
    });
  };

  return (
    <GoogleOAuthProvider clientId="791238341383-855u4aetvghn9htflkqfcf7eb2krkq55.apps.googleusercontent.com">
      <AuthProvider>
        <Router>
          <div className="App">
            <header className="App-header">
              <Link to="/">
                <img
                  src={theme === 'dark' ? lightLogo : darkLogo}
                  alt="Logo"
                  className="App-logo"
                />
              </Link>
              <h1 className="App-name">Ravenous</h1>
              <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
            </header>
            <SearchBar searchYelp={searchYelp} />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/businesses" element={<BusinessList businesses={businesses} />} />
              <Route path="/business/:id" element={<BusinessDetail />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
