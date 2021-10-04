import React, {useState} from "react";
import "./css/BookReview.css";
import {RatingView} from 'react-simple-star-rating';
export const BookReview = (props) => {

    const [reviews, setReviews] = useState([{reviewer: "example reviewer 1",
    date: Date.now(),
    stars: 3,
    content: "okay book",
    },
    {reviewer: "eexample reviewer 2",
    date: Date.now(),
    stars: 5,
    content: "excellent book asdfasdf",
    }]);

    const ReviewItem = (props) => {
        return (
            <div className = "book-review-row">
                <div className = "br-info">
                    <p>{props.reviewer}</p>
                    <p>{props.date}</p>
                </div>
                <div className = "br-content">
                    <RatingView ratingValue = {props.stars} />
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