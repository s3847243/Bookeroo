import React, { Component, Fragment } from 'react'
import "./css/BookDetails.css"
import { getBookByID } from "../../actions/bookActions.js";
import BookListing from './BookListing';
import { addToCart } from "./../../actions/cartActions";
import { getType } from "./../../actions/securityActions"
import BookReview from './BookReview';
import CreateBookReview from './CreateBookReview';
import { getIsbnListings } from '../../actions/listingActions';

class BookDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: null,
            listings:[],
        }
        
        this.handleCartButton = this.handleCartButton.bind(this);
    }


    componentDidMount() {
        getBookByID(this.props.match.params.isbn)
            .then((res) => {
                this.setState({ book: res.data })
            })
            .catch((error) => { console.log("unfulfilled promise: " + error) });
        getIsbnListings(this.props.match.params.isbn)
            .then((res) => {
                this.setState({listings: res.data})
                console.log(res.data) 
            })        
            .catch((error) => { console.log("unfulfilled promise: " + error) });
            
    }

    handleCartButton(index) {
        const listing = this.state.listings[index];
        const cartItem = {
            isbn: this.state.book.isbn,
            bookId: this.state.book.id,
            title: this.state.book.title,
            seller: listing.sellerName,
            sellerId: listing.sellerId,
            price: listing.value,
            condition: listing.condition
        }
        addToCart(cartItem);

    }

    render() {
        let book = this.state.book;
        return (
            <div>
                {(this.state.book != null)
                    ?
                    <div className="content">
                        <div className="flex-container">
                            <div className="sub-content">
                                <img src={"http://covers.openlibrary.org/b/isbn/" + book.isbn + "-L.jpg"}
                                    alt={"book cover for " + book.title} />
                                <table>
                                    <thead>
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
                                    </thead>
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
                        {/* REFACTOR, move the actions and data retreival into the Book Listing component */}
                        {(getType() === "USER" || getType() === "NONE") ?
                            <div className="listings">
                                <h2>Listings</h2>
                                <hr />
                                {
                                    this.state.listings.length == 0 ?
                                        <p id="listings-info">This book has no available listings.</p>
                                        :
                                        <table>
                                            <thead>
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
                                                    
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {this.state.listings.map((listing, i) => (
                                                    <BookListing
                                                        handler={this.handleCartButton}

                                                        sellerName={listing.sellerName}
                                                        value={listing.value}
                                                        condition={listing.condition}
                                                        index={i}
                                                        key={i}
                                                    />
                                                ))}
                                            </tbody>
                                        </table>
                                }
                            </div>
                            :
                            <Fragment />
                        }
                        <hr />


                        <BookReview isbn={this.props.match.params.isbn} />

                        <CreateBookReview
                            isbn={this.props.match.params.isbn}
                        />


                    </div>
                    :
                    <div><h2>... waiting for data</h2> </div>
                }
            </div>
        );
    }
}


export default BookDetails;