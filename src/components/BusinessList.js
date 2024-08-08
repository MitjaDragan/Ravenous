import React from 'react';
import './BusinessList.css';
import Business from './Business';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {this.props.businesses && this.props.businesses.length > 0 ? (
                    this.props.businesses.map(business => (
                        <Business key={business.id} business={business} />
                    ))
                ) : (
                    <p>No businesses found</p>
                )}
            </div>
        );
    }
}

export default BusinessList;
