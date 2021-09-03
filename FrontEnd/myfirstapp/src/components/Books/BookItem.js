import React from 'react'
import "./BookItem.css"

export const BookItem = ({ title, img, genre, price }) => (
    <div className = "bookItem">
        <figure >
            <img src={img} alt="book cover picture" />
            <p>{title}</p>
            <p>{genre}</p>
            <p>{price}</p>
        </figure>
    </div>
);