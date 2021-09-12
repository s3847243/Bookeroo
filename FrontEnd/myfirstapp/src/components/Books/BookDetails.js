import React , { Component } from 'react'
//import {  } from 'react-router';
import "./css/BookDetails.css"
import { getAllBooks, searchBooks } from "../../actions/bookActions.js";
import BookListing from './BookListing';


class BookDetails extends Component {
    constructor() {
        super();
        this.state = {
            book: null,
            listings: null
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

        // getListings(isbn)
        //     .then((res) => {
        //         const listings = res.data;
        //         this.setState({listings: listings});
        //         console.log(this.state.listings)
        // }) 
    }

    render () {
        let book = this.state.book;
        return(
            <div>
                {(this.state.book != null)
                ? 
                <div className="content">
                    <div className="flex-container">
                        <div className="sub-content">
                            <img src={"http://covers.openlibrary.org/b/isbn/" + book.isbn + "-L.jpg" }
                            alt={"book cover for " + book.title}/>
                            <table>
                                <tr>
                                    <th>Author</th>
                                    <td>{book.author}</td>
                                </tr>
                                <tr>
                                    <th>Genre</th>
                                    <td>{book.genre}</td>
                                </tr>
                                <tr>
                                    <th>Year Published</th>
                                    <td>{book.published}</td>
                                </tr>
                                <tr>
                                    <th>ISBN</th>
                                    <td>{book.isbn}</td>
                                </tr>
                            </table>
                        </div>
                        <div className="sub-content">
                            <h1 className="title-bd">{book.title}</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p>
                                Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Sit amet risus 
                                nullam eget felis eget. Vestibulum morbi blandit cursus risus at ultrices. Gravida 
                                cum sociis natoque penatibus et magnis dis parturient. Ultrices in iaculis nunc sed 
                                augue. Sit amet purus gravida quis blandit. Lectus urna duis convallis convallis. Vel 
                                pharetra vel turpis nunc eget lorem dolor. Risus feugiat in ante metus dictum at tempor
                                 commodo. Vel pharetra vel turpis nunc eget lorem dolor. Magna eget est lorem ipsum dolor.
                                 Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Arcu non odio euismod
                                lacinia at quis risus sed vulputate. Maecenas sed enim ut sem. At imperdiet dui accumsan
                                 sit. Nam libero justo laoreet sit amet cursus. In ornare quam viverra orci sagittis eu
                                 volutpat. Sit amet porttitor eget dolor morbi non arcu risus. Adipiscing diam donec
                                 adipiscing tristique risus nec feugiat.
                            </p>
                        </div>
                    </div>
                    
                    <div className="listings">
                        <h2>Listings</h2>
                        <hr/>
                        {/* {this.state.listings.map((listing) => (
                            <BookListing
                                title = {listing.title}
                                seller = {listing.seller}
                                key = {listing.id}
                            />
                        ))} */}
                            <table>
                                <tr>
                                    <th>
                                        Seller
                                    </th>
                                    <th>
                                        Price
                                    </th>
                                    <th>
                                        Condition
                                    </th>
                                    <th>
                                        QTY Remaining
                                    </th>
                                </tr>
                                <BookListing
                                    seller = "example seller"
                                    price = "$30"
                                    condition = "new"
                                    qtyRem = "1"
                                    key = "1"
                                />
                                <BookListing
                                    seller = "example seller"
                                    price = "$20"
                                    condition = "old"
                                    qtyRem = "1"
                                    key = "2"
                                />
                            </table>
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