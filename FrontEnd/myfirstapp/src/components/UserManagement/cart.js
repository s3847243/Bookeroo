import React, { useState, useEffect, Fragment } from "react";
import { getCart, removeFromCart, removeAllCart } from "../../actions/cartActions";
import CartItem from "./cartItem";
import "./css/cart.css"


function Cart(){
    const [cartItems, setCartItems] = useState(getCart());

    const [total, setTotal] = useState(0);

    useEffect(() => {
        console.log(cartItems)
        let total = 0;
        cartItems.forEach((listing) => total = total + Number(listing.price));
        setTotal(total);
    });

    const handleRemove = (index) => {
        removeFromCart(index);
        setCartItems(getCart());
    }

    const handleClear = () => {
        removeAllCart();
        setCartItems(getCart());
    }

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
                {cartItems.map((listing, i) => (
                    <CartItem
                        title = {listing.title}
                        isbn = {listing.isbn}
                        seller = {listing.seller}
                        price = {listing.price}
                        condition = {listing.condition}
                        qtyRem = {listing.qty}
                        index = {i}
                        key = {i}
                        handler = {handleRemove}
                    />
                ))}
                <tr>
                    <td/> <td/> <td/> <td/> <td/>
                    <td><button className="cl-cart-btn" onClick={handleClear}>Clear All</button></td>
                </tr>
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