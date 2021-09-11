import React, { useState, Fragment } from "react";

export function BookListing({ seller, price, qtyRem}) {
    
    return (
        <tr>
            <td>{seller}</td>
            <td>{price}</td>    
            <td>{qtyRem}</td>
            <td><button>Add to Cart</button></td>
        </tr>   
    );
}


export default BookListing;