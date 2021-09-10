import React , { Component } from 'react'
//import {  } from 'react-router';
import "./css/BookDetails.css"
import { getAllBooks, searchBooks } from "../../actions/bookActions.js";

class BookDetails extends Component {
    constructor() {
        super();
        this.state = {
            book: null,
        }
        //this.handleSort = this.handleSort.bind(this);
        //this.handleSearch = this.handleSearch.bind(this);
    }
   

    componentDidMount() {
        getAllBooks()
            .then((res) => {
                const books = res.data;
                console.log(books[0]);
                this.setState({book: books[4]});
                console.log(this.state.book)
        }) 

        // let {isbn} = useParams;
        // const searchParams = "?isbn=" + isbn;
        // searchBooks(searchParams)
        //     .then((res) => {
        //         const book = res.data;
        //         this.setState({book: book});
        // })  
    }

    render () {
        let book = this.state.book;
        return(
            <div>
                {(this.state.book != null)
                ? 
                <div className="content">
                    
                    <div className="sub-content">
                        <h1 className="title-bd">{book.title}</h1>
                        <h2 className="author-bd">By {book.author}</h2>
                    </div>
                    <div className="sub-content">
                        <dl>
                            <dt>Genre</dt>
                            <dd>{book.genre}</dd>
                            <dt>Year Published</dt>
                            <dd>{book.published}</dd>
                            <dt>ISBN</dt>
                            <dd>{book.isbn}</dd>
                        </dl>
                    </div>
                    <div className="sub-content">
                        <img src={"http://covers.openlibrary.org/b/isbn/" + book.isbn + "-L.jpg" }
                        alt={"book cover for " + book.title}/>
                    </div>

                    <div className="sub-content">
                        <h1>Listings</h1>
                    </div>
                    
                </div>
                : 
                <div><h2>... waiting for data</h2> </div>
                }   
            </div>
        );
    }
}

export default BookDetails;