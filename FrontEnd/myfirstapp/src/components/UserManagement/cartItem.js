import React, { useState, Fragment } from "react";

function CartItem({title, isbn, seller, price, condition, qtyRem, index, key, handler}){

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
            <td><button className="rm-cart-btn" onClick={() => handler(index)}>Remove</button></td>
        </tr>   
     
    );
}

export default CartItem;