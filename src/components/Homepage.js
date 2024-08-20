import React from 'react';
import './Homepage.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Example restaurant data (Replace this with actual data)
const restaurants = [
    {
        id: 1,
        name: 'Restaurant 1',
        imageSrc: 'https://www.arkansas.com/sites/default/files/2018-05/food.oven_and_tap.bentonville.1200_x_600_copy.jpg',
        description: 'A description of Restaurant 1',
    },
    {
        id: 2,
        name: 'Restaurant 2',
        imageSrc: 'https://tjaro.com/wp-content/uploads/2017/03/Matsal_Bord_Tjaro-1-1200x800.jpg',
        description: 'A description of Restaurant 2',
    },
    {
        id: 3,
        name: 'Restaurant 3',
        imageSrc: 'https://i0.wp.com/bucadororistorante.com/wp-content/uploads/2024/03/Untitled-design-2024-03-26T112133.705.png?resize=1200%2C600&ssl=1',
        description: 'A description of Restaurant 3',
    },
    // Add more restaurants as needed
];

function Homepage() {
    return (
        <div className="Homepage">
            <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                showStatus={false}
                interval={5000}
            >
                {restaurants.map((restaurant) => (
                    <div key={restaurant.id} className="Homepage-carousel-item">
                        <img src={restaurant.imageSrc} alt={restaurant.name} />
                        <div className="Homepage-carousel-caption">
                            <h2>{restaurant.name}</h2>
                            <p>{restaurant.description}</p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Homepage;
