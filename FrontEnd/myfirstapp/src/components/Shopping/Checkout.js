import React, { useState, useEffect, Fragment } from "react";
// import ReactDOM from 'react-dom';
// import CartItem from "./cartItem";
import "./css/cart.css"
import "./css/checkout.css"
import { removeAllCart, getCartTotal, getCartLength } from "../../actions/cartActions";
import { PayPalButton } from "react-paypal-button-v2";

function Checkout(props){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [postcode, setPostcode] = useState("");
    const [savedInfo, setSavedInfo] = useState(false);
    const [shippingInfo, setShippingInfo] = useState();


    //const [cartItems, setCartItems] = useState(getCart());
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

    const onSubmit = (e) => {
        e.preventDefault();
        setShippingInfo( {
            firstName: firstName,
            lastName: lastName,
            street: street,
            city: city,
            state: state,
            postcode: postcode
        });
        setSavedInfo(true);
        // save shipping info
        console.log(shippingInfo)
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
            <form onSubmit = {onSubmit}>
                <div className="co-form-group">
                    <label>
                        First Name
                        <input
                            type="text"
                            className="co-input"
                            placeholder="First Name"
                            name="firstName"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="co-form-group">
                    <label>
                        Last Name
                        <input
                            type="text"
                            className="co-input"
                            placeholder="Last Name"
                            name="lastName"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="co-form-group">
                    <label>
                        Street Address
                        <input
                            type="text"
                            className="co-input"
                            placeholder=""
                            name="street"
                            value={street}
                            onChange={e => setStreet(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="co-form-group">
                    <label>
                        City
                        <input
                            type="text"
                            className="co-input"
                            placeholder=""
                            name="city"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="co-form-group">
                    <label>
                        State
                        <input
                            type="text"
                            className="co-input"
                            placeholder=""
                            name="state"
                            value={state}
                            onChange={e => setState(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="co-form-group">
                    <label>
                        Postcode
                        <input
                            type="number"
                            className="co-input"
                            placeholder=""
                            name="postcode"
                            value={postcode}
                            onChange={e => setPostcode(e.target.value)}
                            required
                        />
                    </label>
                </div>
                
                <input type="submit" value="Save" className="btn btn-info btn-block mt-4" />
            </form>
            <h2>Total = ${total}</h2>
            
            {savedInfo ? 
            (
                <PayPalButton
                    amount={total}
                    // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                    onSuccess={(details, data) => {
                    alert("Transaction completed by " + details.payer.name.given_name);
                    setPaidFor(true);
                    // OPTIONAL: Call your server to save the transaction
                    return fetch("/paypal-transaction-complete", {
                        method: "post",
                        body: JSON.stringify({
                        orderID: data.orderID
                        })
                    });
                    }}
                    options={{
                        clientId: "ASNP31jq-n5i8qMqIwgnegeQkLjTyUtcETPdirulwK3C4esDFI6-P-DJezugURmJuEYyAav7cpCBPCSh"
                    }}
                />
            )
            :
            (
                <Fragment></Fragment>
            )
            }
            

            </Fragment>
            )

            :

            (<h1>Nothing in your cart.</h1>)
            }
        </div>
    );
}

export default Checkout;