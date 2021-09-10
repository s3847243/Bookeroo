import React , { Component } from 'react'
//import {  } from 'react-router';
import "./BookItem.css"
import { searchBooks } from "../../actions/bookActions.js";

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
        //let {isbn} = useParams;
        //const searchParams = "?isbn=" + isbn;
        // searchBooks(searchParams)
        //     .then((res) => {
        //         const book = res.data;
        //         this.setState({book: book});
        // })  
    }

    render () {
        return(
        <div>
            {/* <p className="title">{title}</p>
            <p className="author">By {author}</p>
            <img src={img}
            alt={"book cover for " + title}/>
            <p className="genre">{genre}</p>
            <p className="published">{published}</p>
            <p className="isbn">Isbn: {isbn}</p> */}
        </div>
        );
    }
}

export default BookDetails;