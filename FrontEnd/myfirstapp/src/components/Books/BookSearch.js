import React, { Component } from "react";
import "./BookSearch.css"


class BookSearch extends Component {
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
            <form className="search-bar" onSubmit = {this.onSubmit}>
                <div className="form-field">
                    <h2>Title:</h2>
                    <input type="text" name="title" value={this.state.title} onChange={this.onChange}/>
                </div>
                <div className="form-field">
                    <h2>Author:</h2>
                    <input type="text" name="author" value={this.state.author} onChange={this.onChange}/>
                </div>
                <div className="form-field">
                    <h2>ISBN:</h2>
                    <input type="text" name="isbn" value={this.state.isbn} onChange={this.onChange}/>
                </div>
                <div className="form-field">
                    <h2>Genre:</h2>
                    <input type="text" name="genre" value={this.state.genre} onChange={this.onChange}/>
                </div>
                <input type="submit" className="submit-btn" value="Search" />
            </form>
            
        </React.Fragment>
        );
    }
}

export default BookSearch;