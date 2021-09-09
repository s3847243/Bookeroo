import React, { Component } from "react";
// import { Fragment } from "react";
// import { Link } from "react-router-dom";
import { getAllBooks, searchBooks } from "../../actions/bookActions.js";
import { BookItem } from "./BookItem";
import BookSearch from "./BookSearch.js";
import BookSort from "./BookSort.js";
import "./BookIndex.css"
import {shuffle, compareTitle, compareYear} from "./functions/BookFunctions.js"



class BookIndex extends Component {
    constructor() {
        super();
        this.state = {
            books: []
        }

        this.handleSort = this.handleSort.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    
    componentDidMount() {
        getAllBooks()
            .then((res) => {
                const books = res.data;
                this.setState({books: shuffle(books)});
        })  
       
    }

    handleSort(sortParam) {
        console.log("sort handler");

        if (sortParam.alphabetical) {
            let sorted = this.state.books.sort(compareTitle) 
            if(sortParam.alphabetical === "z-a"){sorted = sorted.reverse();} 
            // console.log(sorted);
            this.setState({books: sorted});
        } 
        else {
            let sorted = this.state.books.sort(compareYear) 
            if(sortParam.year === "high-to-low"){sorted = sorted.reverse();} 
            // console.log(sorted);
            this.setState({books: sorted});
        }
    }


    handleSearch(searchParams) {
        console.log("search handler");


        // trim string fields
        for (let key in searchParams) {
            searchParams[key] = searchParams[key].trim();
        }

        // query back-end and set state of books
        searchBooks(searchParams)
            .then((res) => {
                const books = res.data;
                this.setState({books: shuffle(books)});
        }) 

    }
    

    render() {
        return (
        <React.Fragment>
            <BookSearch handler={this.handleSearch}/>
            <BookSort handler={this.handleSort}/>
            <div className = "books">
                {this.state.books.map((book) => (
                    <BookItem
                        title = {book.title}
                        author = {book.author}
                        img = {"http://covers.openlibrary.org/b/isbn/" + book.isbn + "-L.jpg"}
                        isbn = {book.isbn}
                        genre = {book.genre}
                        published = {book.published}
                        key = {book.id}
                    />
                ))}
            </div>
        </React.Fragment>
        );
    }
}

export default BookIndex;