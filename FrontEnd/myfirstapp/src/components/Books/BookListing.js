import React from "react";


export const BookListing = (props) => {
    
    return (
        
        <tr className = "book-listing-row">
            <td>{props.seller}</td>
            <td>${props.price}</td>   
            <td>{props.condition}</td> 
            <td>{props.qtyRem}</td>
            <td><button className="cart-btn" onClick={() => props.handler(props.index)}>Add to Cart</button></td>
        </tr>   
    );
}


export default BookListing;