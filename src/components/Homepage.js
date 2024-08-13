import React from 'react';
import './Homepage.css';

function Homepage() {
    return (
        <div className="Homepage">
            <header className="Homepage-header">
                <h1>Welcome to Ravenous</h1>
                <p>Find the best restaurants, cafes, and bars around you.</p>
            </header>
            <div className="Homepage-image">
                <img src="https://via.placeholder.com/1200x600" alt="Delicious food" />
            </div>
        </div>
    );
}

export default Homepage;
