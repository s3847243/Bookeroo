import React, { useState, useEffect, Fragment } from "react";
// import ReactDOM from 'react-dom';
// import CartItem from "./cartItem";
import "./css/cart.css"
import "./css/checkout.css"
import { removeAllCart, getCartTotal, getCartLength, getCart } from "../../actions/cartActions";
import { PayPalButton } from "react-paypal-button-v2";
import { addTransaction } from "../../actions/transactionActions";
import CartItem from "./CartItem";
import "./css/cart.css"
import { getId } from "../../actions/securityActions";

function Checkout(props){


    const [cartItems, setCartItems] = useState(getCart());
    const [total] = useState(getCartTotal());
    const [cartLength] = useState(getCartLength())

    const [paidFor, setPaidFor] = useState(false);

    useEffect(() => {
        if (paidFor) {
            removeAllCart();
        }
    }, [paidFor]
    );

    const processTransaction = (data) => {
        console.log(cartItems);
        cartItems.forEach((item) => {
            console.log("item")
            console.log(item);
            let transaction = {};
            transaction['bookId'] = item.bookId;
            transaction['sellerId'] = item.sellerId;
            transaction['customerId'] = getId();
            transaction['value'] = item.price;
            transaction['status'] = 'shipping';
            addTransaction(transaction);
        });
    }

    return (
        <div className="checkout-content">
            {paidFor ? (
                <Fragment>
                    <h1>Thanks for buying from Bookeroo!</h1>
                    
                </Fragment>
            ) : 
            cartLength !== 0 ?
            (
            <Fragment>
            <h1>Checkout</h1>
            <div className="cart-content">
                <table>
                    <thead>
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
                    </thead>
                        <tbody>
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
                        />
                        ))}
                    </tbody>
                </table>
            </div>

            <h2>Total = ${total}</h2>
            
          
                <PayPalButton
                    amount={total}
                    // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                    onSuccess={(details, data) => {
                    alert("Transaction completed by " + details.payer.name.given_name);
                    setPaidFor(true);
                    processTransaction(data);
                    }}
                    options={{
                        clientId: "ASNP31jq-n5i8qMqIwgnegeQkLjTyUtcETPdirulwK3C4esDFI6-P-DJezugURmJuEYyAav7cpCBPCSh"
                    }}
                />
            

            </Fragment>
            )

            :

            (<h1>Nothing in your cart.</h1>)
            }
        </div>
    );
}

export default Checkout;