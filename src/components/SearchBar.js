import React from 'react';
import './SearchBar.css';
import { useAuth } from '../context/AuthContext';
import { GoogleLogin } from '@react-oauth/google';

function SearchBar({ searchYelp }) {
  const { user, login, logout } = useAuth();
  const [term, setTerm] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [sortBy, setSortBy] = React.useState('best_match');

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    searchYelp(term, location, sortBy);
  };

  return (
    <div className="SearchBar">
      <div className="SearchBar-container">
        <div className="SearchBar-sort-options">
          <ul>
            <li
              className={sortBy === 'best_match' ? 'active' : ''}
              onClick={() => handleSortByChange('best_match')}
            >
              Best Match
            </li>
            <li
              className={sortBy === 'rating' ? 'active' : ''}
              onClick={() => handleSortByChange('rating')}
            >
              Highest Rated
            </li>
            <li
              className={sortBy === 'review_count' ? 'active' : ''}
              onClick={() => handleSortByChange('review_count')}
            >
              Most Reviewed
            </li>
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input
            placeholder="Search Businesses"
            value={term}
            onChange={handleTermChange}
          />
          <input
            placeholder="Where?"
            value={location}
            onChange={handleLocationChange}
          />
        </div>
        <div className="SearchBar-submit">
          <a onClick={handleSearch}>Let's Go</a>
        </div>
        <div className="SearchBar-login">
          {user ? (
            <button onClick={logout} className="logout-button">
              Logout
            </button>
          ) : (
            <GoogleLogin
              onSuccess={login}
              onFailure={(error) => console.error(error)}
              className="login-button"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
