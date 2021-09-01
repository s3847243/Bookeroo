import React, { Component } from "react";
// import { Fragment } from "react";
// import { Link } from "react-router-dom";
import { getAllBooks } from "../../actions/bookActions.js";
import {Book } from "./BookItem";
import axios from "axios";


class BookIndex extends Component {
    constructor() {
        super();
        this.state = {
            books: []
        }
    }
    
    componentDidMount() {
        getAllBooks()
            .then((res) => {
                const books = res.data;
                this.setState({books});
        })  
       
    }
    

    render() {
        return (
        <React.Fragment>
            <div className = "books">
                {this.state.books.map((book) => (
                    <Book
                        title = {book.login}
                        img = {book.avatar_url}
                        genre = {book.type}
                    />
                ))}
            </div>
        </React.Fragment>
        );
    }
}

export default BookIndex;