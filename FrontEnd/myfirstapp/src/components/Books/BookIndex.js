import React, { Component } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

class BookIndex extends Component {
    constructor(props) {
        super();
    }

    books() {
        const books = ["Harry Potter", "Lord of The Rings", "How to Train Your Dragon"]
        const bookObjects = books.map((book, i) => ({id: i, title: book}));
        return(
            <ul>
                {bookObjects.map((book) => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        )
    }

    render() {
        return (
        <React.Fragment>
            <div className = "books">
                < this.books />
            </div>
        </React.Fragment>
        );
    }
}

export default BookIndex;