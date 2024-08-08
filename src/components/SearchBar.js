import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSortByChange = this.handleSortByChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleTermChange(event) {
        this.setState({ term: event.target.value });
    }

    handleLocationChange(event) {
        this.setState({ location: event.target.value });
    }

    handleSortByChange(sortByOption) {
        this.setState({ sortBy: sortByOption });
    }

    handleSearch(event) {
        event.preventDefault();
        console.log(`Searching Yelp with ${this.state.term}, ${this.state.location}, ${this.state.sortBy}`);
    }

    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return (
                <li
                    key={sortByOptionValue}
                    className={this.state.sortBy === sortByOptionValue ? 'active' : ''}
                    onClick={() => this.handleSortByChange(sortByOptionValue)}
                >
                    {sortByOption}
                </li>
            );
        });
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input
                        placeholder="Search Businesses"
                        value={this.state.term}
                        onChange={this.handleTermChange}
                    />
                    <input
                        placeholder="Where?"
                        value={this.state.location}
                        onChange={this.handleLocationChange}
                    />
                </div>
                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        );
    }
}

export default SearchBar;
