import React from 'react'
import "./BookItem.css"

export const Book = ({ title, img, genre }) => (
    <figure className = "bookItem">
        <img src={img} alt="book cover picture" />
        <p>{title}</p>
        <p>{genre}</p>
    </figure>
);