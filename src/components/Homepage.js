import React from 'react';
import './Homepage.css';

function Homepage() {
    return (
        <div className="Homepage">
            <header className="Homepage-header">
                <h1>Welcome to Ravenous</h1>
                <p>Find the best restaurants, cafes, and bars around you.</p>
            </header>
            <br/>
            <div className="Homepage-image">
                <img src="https://i0.wp.com/bucadororistorante.com/wp-content/uploads/2024/03/Untitled-design-2024-03-26T112133.705.png?resize=1200%2C600&ssl=1" alt="Delicious food" />
            </div>
        </div>
    );
}

export default Homepage;
