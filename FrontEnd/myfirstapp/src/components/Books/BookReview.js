import React, {Fragment, useState} from "react";
import "./css/BookReview.css";
import {RatingView} from 'react-simple-star-rating';
import { getReviews } from "../../actions/reviewActions";
export const BookReview = (props) => {

    const [reviews, setReviews] = useState([{reviewer: "example reviewer 1",
    date: Date.now(),
    stars: 3,
    content: "Okay i guess....Okay i guess....Okay i guess....Okay i guess....Okay i guess....Okay i guess....Okay i guess....Okay i guess....",
    },
    {reviewer: "example reviewer 2",
    date: Date.now(),
    stars: 5,
    content: "excellent i guess....excellent i guess....excellent i guess....excellent i guess....excellent i guess....",
    }]);

    //getReviews(props.isbn)

    const ReviewItem = (props) => {
        return (
            <div className = "book-review-row">
                <div className = "br-info">
                    <p className="review-name">{props.reviewer}</p>
                    <p className="review-date"> Reviewed on {props.date}</p>
                </div>
                <div className = "br-content">
                    <RatingView ratingValue = {props.stars} className="rating-field"/>
                    <p>{props.content}</p>
                </div>
            </div>   
        )
    }
    return (
        <div className="reviews">
            <h2>Reviews</h2>
        
            {/* // reviews */}
            {reviews.map((review, i) => (
              
                <ReviewItem
                    reviewer = {review.reviewer}
                    date = {review.date}
                    stars = {review.stars}
                    content = {review.content}
                    index = {i}
                    key = {i}
                />
  
            ))}
        </div>
    );
}


export default BookReview;