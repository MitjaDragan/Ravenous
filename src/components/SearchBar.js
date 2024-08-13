import React from 'react';
import './SearchBar.css';
import { useNavigate } from 'react-router-dom';

function SearchBar({ searchYelp }) {
    const [term, setTerm] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [sortBy, setSortBy] = React.useState('best_match');
    const navigate = useNavigate();

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
        if (term && location) {
            searchYelp(term, location, sortBy);
            navigate('/businesses'); // Redirect to the business list view
        } else {
            alert('Please enter both a search term and location.');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch(event);
        }
    };

    const goHome = (event) => {
        navigate('/');
    };

    return (
        <div className="SearchBar">
            <div className="SearchBar-Logo">
                <h2 onClick={() => goHome()}>Ravenous!</h2>
            </div>
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
                    onKeyPress={handleKeyPress}
                />
                <input
                    placeholder="Where?"
                    value={location}
                    onChange={handleLocationChange}
                    onKeyPress={handleKeyPress}
                />
            </div>
            <div className="SearchBar-submit">
                <button onClick={handleSearch}>Let's Go</button>
            </div>
        </div>
    );
}

export default SearchBar;
