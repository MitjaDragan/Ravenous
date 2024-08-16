import React, { useState, useEffect } from 'react';
import './Favorites.css';

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [newFavorite, setNewFavorite] = useState('');

  // Load favorites from local storage when the component mounts
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  // Save favorites to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = () => {
    if (newFavorite.trim()) {
      setFavorites([...favorites, newFavorite.trim()]);
      setNewFavorite('');
    }
  };

  const removeFavorite = (index) => {
    const updatedFavorites = favorites.filter((_, i) => i !== index);
    setFavorites(updatedFavorites);
  };

  return (
    <div className="Favorites-container">
      <h1>Your Favorite Restaurants</h1>
      <ul>
        {favorites.map((favorite, index) => (
          <li key={index}>
            {favorite}
            <button onClick={() => removeFavorite(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a new favorite"
        value={newFavorite}
        onChange={(e) => setNewFavorite(e.target.value)}
      />
      <button onClick={addFavorite}>Add Favorite</button>
    </div>
  );
}

export default Favorites;
