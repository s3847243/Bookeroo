import React, { Fragment, useState, useEffect } from "react";
import "./css/BookReview.css";
import { RatingView } from 'react-simple-star-rating';
import { getIsbnReviews } from "../../actions/reviewActions";
export const BookReview = (props) => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getIsbnReviews(props.isbn).then((res) => {
            setReviews(res.data);
        });
    }, [])

    const ReviewItem = (props) => {
        let date = new Date(props.create_At);
        let prettyDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
        return (
            <div className="book-review-row">
                <div className="br-info">
                    <p className="review-name">{props.reviewer}</p>
                    <p className="review-date"> Reviewed on {prettyDate}</p>
                </div>
                <div className="br-content">
                    <RatingView ratingValue={props.rating} className="rating-field" />
                    <p>{props.body}</p>
                </div>
            </div>
        )
    }

    const AverageRating = () => {
        let total = 0;
        let numReviews = 0;
        if (reviews instanceof Array) {
            reviews.forEach((review) => total = total + Number(review.rating));
            numReviews = reviews.length;
        }

        const average = (total / numReviews).toFixed(1);

        return (
            <div className="average-rating">
                <p>Average rating: {average}</p>
                <RatingView ratingValue={average} />
            </div>
        );
    }

    return (
        <div className="reviews">
            <h2>Reviews</h2>

            {reviews.length == 0 ?
                <p id="reviews-info">There are currently no reviews for this item.</p>
                :
                <div>
                    <AverageRating />
                    {
                        reviews.map((review, i) => (

                            <ReviewItem
                                reviewer={review.reviewer}
                                create_At={review.create_At}
                                rating={review.rating}
                                body={review.body}
                                index={i}
                                key={i}
                            />
                        ))
                    }
                </div>
            }
        </div>
    );
}


export default BookReview;