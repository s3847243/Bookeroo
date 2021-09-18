import React, { useState, useEffect, Fragment, useRef } from "react";
// import ReactDOM from 'react-dom';
// import CartItem from "./cartItem";
import "./css/cart.css"
import "./css/checkout.css"
import { getCart, removeAllCart, getCartTotal, getCartLength } from "../../actions/cartActions";
import { PayPalButton } from "react-paypal-button-v2";

function Checkout(props){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [postcode, setPostcode] = useState("");
    const [shippingInfo, setShippingInfo] = useState();


    //const [cartItems, setCartItems] = useState(getCart());
    const [total] = useState(getCartTotal());
    const [cartLength] = useState(getCartLength())

    const [paidFor, setPaidFor] = useState(false);
    const [loaded, setLoaded] = useState(false);

    let paypalRef = useRef();

    useEffect(() => {
        console.log("run once")
        const script = document.createElement("script");
        script.src = 
        "https://www.paypal.com/sdk/js?client-id=ASNP31jq-n5i8qMqIwgnegeQkLjTyUtcETPdirulwK3C4esDFI6-P-DJezugURmJuEYyAav7cpCBPCSh&currency=AUD";
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
    }, []);

    useEffect(() => {
        if (loaded) {
            setTimeout(()=>{
                window.paypal
                    .Buttons({
                        createOrder: (data, actions) => {
                            return actions.order.create({
                                purchase_units: [
                                    {
                                      amount: {
                                        value: total,
                                      },
                                    },
                                  ],
                            })
                        },
                        onApprove: async (data, actions) => {
                            const order = await actions.order.capture();
                            setPaidFor(true);
                        }
                    })
                    .render(paypalRef);
            });
        }
    }, [loaded]);

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
     
    }


    return (
        <div className="checkout-content">
            {paidFor ? (
                <h1>Thanks for buying from Bookeroo!</h1>
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
            
            <div className="paypal" ref={v=>(paypalRef = v)}/>

            </Fragment>
            )

            :

            (<h1>Nothing in your cart.</h1>)
            }
        </div>
    );
}

export default Checkout;