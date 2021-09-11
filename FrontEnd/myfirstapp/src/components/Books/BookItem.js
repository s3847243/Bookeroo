import React from 'react'
import "./css/BookItem.css"
import { Link } from "react-router-dom";

export function BookItem({ title, author, img,isbn, genre,published}) {
    
    return (
        <Link className = "bookItem" to={`/book/${isbn}`}>
            <div >
                    <p className="title">{title}</p>
                    <p className="author">By {author}</p>
                    <img src={img}
                    //"https://via.placeholder.com/313x472?text=No+Image+Found"
                    alt={"book cover for " + title}/>
                    <p className="genre">{genre}</p>
                    <p className="published">{published}</p>
                    <p className="isbn">Isbn: {isbn}</p>
            </div>
        </Link>
    );
}
