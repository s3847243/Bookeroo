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

function Checkout(props){


    const [cartItems, setCartItems] = useState(getCart());
    const [total] = useState(getCartTotal());
    const [cartLength] = useState(getCartLength())

    const [paidFor, setPaidFor] = useState(false);

    useEffect(() => {
        console.log("checkpaid")
        // send to transactions backend
        if (paidFor) {
            console.log("clear the cart")
            removeAllCart();
        }
       
        },
        [paidFor]
    );


    const processTransaction = (data) => {
        const transaction = {};
        // transaction['id'] = data.orderID;
        transaction['bookId'] = data.orderID;
        transaction['sellerId'] = data.orderID;
        transaction['customerId'] = data.orderID;
        transaction['value'] = total;
        transaction['status'] = 'shipping';
        console.log(transaction);
        // OPTIONAL: Call your server to save the transaction
                    // return fetch("/paypal-transaction-complete", {
                    //     method: "post",
                    //     body: JSON.stringify({
                    //     orderID: data.orderID
                    //     })
                        
                    // });
        addTransaction(transaction);
    }

    return (
        <div className="checkout-content">
            {paidFor ? (
                <Fragment>
                    <h1>Thanks for buying from Bookeroo!</h1>
                    <p> We will implement your order next Sprint. (Transaction history, order status, etc.) </p>
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