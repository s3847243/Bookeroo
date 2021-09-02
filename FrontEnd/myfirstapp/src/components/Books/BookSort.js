import React, { Component } from "react";
import "./BookSort.css"

class BookSort extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            author: "",
            isbn: "",
            genre: ""
        }
    }

    componentDidMount() {
    }
    
    onSubmit(e) {
        e.preventDefault();
        const searchParams = {
            title: this.state.title,
            author: this.state.author,
            isbn: this.state.isbn,
            genre: this.state.genre
        }
    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
        <React.Fragment>
            <div className="sort-bar">
                <h2>Sort Results: </h2>
                <p>Alphabetical</p>
                <select name="alphabetical">
                    <option value="any-alphabetical">Any</option>
                    <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
                </select>
                <p>Price</p>
                <select name="price">
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