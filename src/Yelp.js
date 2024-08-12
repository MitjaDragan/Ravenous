const apiKey = '9BPj83ShfJ5UAeqVi1Ws8PNxpNmi5I03G7Tmdpnbi05RwlclZ2qAeqLOvh3B0gqQHlV4JBEztu8-CruRdpyKGrXsmlDPr8FjWf524qUfe0PRTcLOKjspd4EtN7i0ZnYx';
const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';

const Yelp = {
    search(term, location, sortBy) {
        const url = `${corsAnywhereUrl}https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;

        return fetch(url, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed!');
        })
        .then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));
            } else {
                throw new Error('No businesses found!');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    },

    getBusinessDetails(id) {
        const url = `${corsAnywhereUrl}https://api.yelp.com/v3/businesses/${id}`;

        return fetch(url, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed!');
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
};

export default Yelp;
