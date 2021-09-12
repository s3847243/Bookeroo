import React, { useState, Fragment } from "react";

function CartItem({title, isbn, seller, price, condition, qtyRem, key}){


    return (
        <tr>
            <td>
                <img src={"http://covers.openlibrary.org/b/isbn/" + isbn + "-L.jpg" }
                            alt={"book cover for " + title}/>
            </td>
            <td>{title}</td>   
            <td>{seller}</td> 
            <td>${price}</td>
            <td>{condition}</td>
            <td><button className="rm-cart-btn">Remove</button></td>
        </tr>   
     
    );
}

export default CartItem;