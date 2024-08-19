import React from 'react';
import './Business.css';
import { Link } from 'react-router-dom';

class Business extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFavorite: false,
        };
    }

    componentDidMount() {
        this.checkIfFavorite();
    }

    checkIfFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const isFavorite = favorites.some(fav => fav.id === this.props.business.id);
        this.setState({ isFavorite });
    };

    toggleFavorite = () => {
        const { business } = this.props;
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        if (this.state.isFavorite) {
            // Remove from favorites
            favorites = favorites.filter(fav => fav.id !== business.id);
        } else {
            // Add to favorites
            favorites.push(business);
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
        this.setState({ isFavorite: !this.state.isFavorite });
    };

    render() {
        const { business } = this.props;
        const { isFavorite } = this.state;

        return (
            <div className="Business">
                <div className="image-container">
                    <img src={business.imageSrc} alt={business.name} />
                </div>
                <div className="Business-header">
                    <Link to={`/business/${business.id}`} className="Business-name">
                        <h2>{business.name}</h2>
                    </Link>
                    <span
                        className={`favorite-star ${isFavorite ? 'is-favorite' : ''}`}
                        onClick={this.toggleFavorite}
                    >
                        ★
                    </span>
                </div>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>{business.address}</p>
                        <p>{business.city}</p>
                        <p>{business.state} {business.zipCode}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{business.category}</h3>
                        <h3 className="rating">{business.rating} stars</h3>
                        <p>{business.reviewCount} reviews</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Business;
