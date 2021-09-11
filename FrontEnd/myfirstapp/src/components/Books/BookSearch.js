import React, { Component } from "react";
import "./css/BookSearch.css"


class BookSearch extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            author: "",
            isbn: "",
            genre: ""
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
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
        this.props.handler(searchParams);
    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
        <React.Fragment>
            <form className="search-bar" onSubmit = {this.onSubmit}>
                <div className="search-box">
                    <input type="text" name="title" value={this.state.title} 
                    placeholder="Search by title, author, isbn, or genre..."
                    onChange={this.onChange}/>
                </div>
                <div className="search-btn">
                    <input type="submit" className="submit-btn" value="Search" />
                </div>
            </form>
            
        </React.Fragment>
        );
    }
}

export default BookSearch;