import React, { useState } from "react";
import "./css/BookReview.css";
import { Rating } from 'react-simple-star-rating';
import { addReview } from "../../actions/reviewActions";

export const CreateBookReview = (props) => {

    const [reviewer, setReviewer] = useState("");
    const [rating, setRating] = useState(0);
    const [body, setBody] = useState("");
    const [posted, setPosted] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        const reviewData = {
            reviewer: reviewer,
            rating: rating,
            body: body,
            isbn: props.isbn,
        }
        addReview(reviewData);
        setPosted(true);
    }

    const handleRating = (rate) => {
        setRating(rate)
    }

    return (
        <div>
            {!posted ?
                <div className="add-review">
                    <h2>Read this book?</h2>
                    <h3>Please take some time to leave a review!</h3>
                    <form onSubmit={onSubmit}>
                        <div className="review-form-field">
                            <label>
                                Name
                                <input id="reviewer" type="text" value={reviewer} onChange={e => setReviewer(e.target.value)} required />
                            </label>
                        </div>
                        <div className="review-form-field">
                            <div className="rating-container">
                                <Rating className="rating-field" ratingValue={rating} onClick={handleRating} />
                            </div>
                        </div>
                        <div className="review-form-field">
                            <label>
                                Review <small>(max 255 characters)</small>
                                <textarea id="rv-body" rows="10" cols="50" value={body} onChange={e => setBody(e.target.value)} required maxLength="255" />
                            </label>
                        </div>

                        <div className="review-form-submit">
                            <input type="submit" value="Post Review" />
                        </div>
                    </form>
                </div>
                :
                <p className="add-review-info">Thanks for reviewing this book!</p>
            }
        </div>
    );
}


export default CreateBookReview;