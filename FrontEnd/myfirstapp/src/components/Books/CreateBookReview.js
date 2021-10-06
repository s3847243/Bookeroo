import React, {useState} from "react";
import "./css/BookReview.css";
import {Rating} from 'react-simple-star-rating';
import { addReview } from "../../actions/reviewActions";

export const CreateBookReview = (props) => {

    const [name, setName] = useState("");
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        const reviewData = {
            name: name,
            rating: rating,
            review: review,
            ISBN: props.isbn,
        }
        console.log(reviewData);
        addReview(reviewData);
        window.location.reload(false);
    }

    const handleRating = (rate) => {
        setRating(rate)
      }
    
    return (
        <div className = "add-review">
            <h2>Read this book?</h2>
            <h3>Please take some time to leave a review!</h3>
            <form onSubmit={onSubmit}>
                <div className="review-form-field">
                    <label>
                        Name
                        <input type="text" value={name} onChange={e => setName(e.target.value)} required/>
                    </label>
                </div>
                <div className="review-form-field">
                    <div className="rating-container">
                        <Rating className="rating-field" ratingValue={rating} onClick={handleRating}/>
                    </div>
                </div>
                <div className="review-form-field">
                    <label>
                        Review
                        <textarea rows="10" cols="50" value={review} onChange={e => setReview(e.target.value)} required/>
                    </label>
                </div>
                
                <div className="review-form-submit">
                    <input type="submit" value="Post Review"/>
                </div>
            </form>

        </div>
    );
}


export default CreateBookReview;