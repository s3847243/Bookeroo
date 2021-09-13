import React, { useState, useEffect, Fragment } from "react";
import CartItem from "./cartItem";
import "./css/cart.css"
import { useStore } from 'react-redux'

function Cart(){
    const [cartItems, setCartItems] = useState([]);

    const [total, setTotal] = useState(0);
    const store = useStore();

    useEffect(() => {
        
        setCartItems(store.getState().cart.cart);
        let total = 0;
        cartItems.forEach((listing) => total = total + listing.price);
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
                {/* {cartItems.map((listing) => (
                    <CartItem
                        title = {listing.title}
                        isbn = {listing.isbn}
                        seller = {listing.seller}
                        price = {listing.price}
                        condition = {listing.condition}
                        qtyRem = {listing.qty}
                        key = {listing.id}
                    />
                ))} */}
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