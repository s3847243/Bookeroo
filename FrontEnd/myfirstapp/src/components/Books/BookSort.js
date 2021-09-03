import React, { Component } from "react";

import "./BookSort.css"

class BookSort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alphabetical: "any-alpha",
            price: "any-price"
        };

        this.onChange = this.onChange.bind(this);

    }

    
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        e.target.name === "alphabetical" ? this.setState({price: "any-price"}) : this.setState({alphabetical: "alphabetical"});
        
        const sortParam = {[e.target.name]: e.target.value};

        this.props.handler(sortParam);
    }

    render() {
        return (
        <React.Fragment>
            <div className="sort-bar">
                <h2>Sort Results: </h2>
                <p>Alphabetical</p>
                <select name="alphabetical" onChange={this.onChange} value={this.state.alphabetical}>
                    <option value="any-alpha">Any</option>
                    <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
                </select>
                <p>Price</p>
                <select name="price" onChange={this.onChange} value={this.state.price}>
                    <option value="any-price">Any</option>
                    <option value="low-to-high">Low to High</option>
                    <option value="high-to-low">High to Low</option>
                </select>
            </div>
        </React.Fragment>
        );
    }
}

export default BookSort;