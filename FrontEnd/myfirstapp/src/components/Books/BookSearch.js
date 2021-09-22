import React, { Component } from "react";
import "./css/BookSearch.css"


class BookSearch extends Component {
    constructor() {
        super();
        this.state = {
            params: ""
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
    }
    
    onSubmit(e) {
        e.preventDefault();
        this.props.handler(this.state.params);
    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
        <React.Fragment>
            <form className="search-bar" onSubmit = {this.onSubmit}>
                <div className="search-box">
                    <input type="text" name="params" value={this.state.title} 
                    onChange={this.onChange}
                    placeholder="Search by Title, Author, or Genre..."/>
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