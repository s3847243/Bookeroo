import React, {useState} from "react";
import "./css/BookListing.css"

export const BookListing = (props) => {
    const [added, setAdded] = useState(false);
    const onClick = () => {
        props.handler(props.index);
        setAdded(true);
    }

    return (
        
        <tr className = "book-listing-row">
            <td>{props.seller}</td>
            <td>${props.price}</td>   
            <td>{props.condition}</td> 
            <td>{props.qtyRem}</td>
            {!added 
            ? 
            (
                <td><button className="cart-btn" onClick={onClick}>Add to Cart</button></td>
            )
            :
            (
                <td><button className="added-cart-btn">Added to Cart!</button></td>
            )
            }
            
        </tr>   
    );
}


export default BookListing;