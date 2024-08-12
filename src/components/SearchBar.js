import React from 'react';
import './SearchBar.css';
import { useNavigate } from 'react-router-dom';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

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
            navigate('/'); // Redirect to the business list view
        } else {
            alert('Please enter both a search term and location.');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch(event);
        }
    };

    return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {Object.keys(sortByOptions).map(sortByOption => {
                        let sortByOptionValue = sortByOptions[sortByOption];
                        return (
                            <li
                                key={sortByOptionValue}
                                className={sortBy === sortByOptionValue ? 'active' : ''}
                                onClick={() => handleSortByChange(sortByOptionValue)}
                            >
                                {sortByOption}
                            </li>
                        );
                    })}
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
                <a onClick={handleSearch}>Let's Go</a>
            </div>
        </div>
    );
}

export default SearchBar;
