import React, { useState, Fragment } from "react";

export function BookListing({ seller, price, condition, qtyRem}) {
    
    return (
        <tr>
            <td>{seller}</td>
            <td>{price}</td>   
            <td>{condition}</td> 
            <td>{qtyRem}</td>
            <td><button className="cart-btn">Add to Cart</button></td>
        </tr>   
    );
}


export default BookListing;