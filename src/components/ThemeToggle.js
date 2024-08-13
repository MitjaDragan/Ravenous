import React from 'react';
import './ThemeToggle.css';

function ThemeToggle({ toggleTheme, theme }) {
    return (
        <div className="ThemeToggle">
            <label className="switch">
                <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
                <span className="slider round"></span>
            </label>
        </div>
    );
}

export default ThemeToggle;
