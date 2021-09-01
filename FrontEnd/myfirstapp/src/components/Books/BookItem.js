import React from 'react'

export const Book = ({ title, img, genre }) => (
    <figure>
        <img src={img} alt="book cover picture" style={{width: "5%"}}/>
        <p>{title}</p>
        <p>{genre}</p>
    </figure>
);