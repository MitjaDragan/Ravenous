import React, { useState, useEffect } from 'react';
import './Favorites.css';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from local storage when the component mounts
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter(favorite => favorite.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="Favorites-container">
      <h1>Your Favorite Restaurants</h1>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((favorite) => (
            <li key={favorite.id} className="Favorite-item">
              <div className="Favorite-details">
                <img src={favorite.imageSrc} alt={favorite.name} className="Favorite-image" />
                <div>
                  <h2>{favorite.name}</h2>
                  <p>{favorite.address}, {favorite.city}, {favorite.state} {favorite.zipCode}</p>
                  <p>{favorite.category}</p>
                  <p>{favorite.rating} stars, {favorite.reviewCount} reviews</p>
                </div>
              </div>
              <button onClick={() => removeFavorite(favorite.id)} className="Remove-button">Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>You have no favorite restaurants saved.</p>
      )}
    </div>
  );
}

export default Favorites;
