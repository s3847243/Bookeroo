import React, { useState, useEffect, Fragment } from "react";
import CartItem from "./cartItem";
import "./css/cart.css"

function Cart(){
    const [listings, setListings] = useState([
        {title: "hp", isbn:9780747532743, seller:"puffin", price:12.50, condition: "new", qty: 1, id: 1},
        {title: "hp", isbn:9780747532743, seller:"puffin", price:12.50, condition: "new", qty: 1, id: 1},
    ]);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        let total = 0;
        listings.forEach((listing) => total = total + listing.price);
        setTotal(total);
    });

    return (
        <div className="cart-content">
            <h1>
                Shopping Cart
            </h1>
            <hr/>
            <table>
                <tr>
                    <th>
                    </th>
                    <th>
                        Title
                    </th>
                    <th>
                        Seller
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        Condition
                    </th>
                </tr>
                {listings.map((listing) => (
                    <CartItem
                        title = {listing.title}
                        isbn = {listing.isbn}
                        seller = {listing.seller}
                        price = {listing.price}
                        condition = {listing.condition}
                        qtyRem = {listing.qty}
                        key = {listing.id}
                    />
                ))}
            </table>
            <hr/>
            <div className="exit-section">
                <h2>Total = ${total}</h2>
                <button className="checkout-btn">Checkout</button>
            </div>
            
            
        </div>
    );
}

export default Cart;