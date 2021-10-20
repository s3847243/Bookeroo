package com.rmit.sept.bk_bookservices.services;

import com.rmit.sept.bk_bookservices.Repositories.ReviewRepository;
import com.rmit.sept.bk_bookservices.exceptions.ISBNAlreadyExistsException;
import com.rmit.sept.bk_bookservices.model.Book;
import com.rmit.sept.bk_bookservices.model.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    public Review saveReview (Review newReview){
        try{
            newReview.setTitle(newReview.getTitle());
            newReview.setBody(newReview.getBody());
            newReview.setUserID(newReview.getUserID());
            newReview.setIsbn(newReview.getIsbn());
            return reviewRepository.save(newReview);

        }catch (Exception e){
            throw new ISBNAlreadyExistsException("ISBN '"+newReview.getIsbn()+"' already exists");
        }

    }

    public void deleteReview(String id){
        Long longId = Long.parseLong(id);
        reviewRepository.delete(reviewRepository.getById(longId));
    }

    public List<Review> getAllReviews() {
        Iterable<Review> iterable = reviewRepository.findAll();
        List<Review> reviews = new ArrayList<>();

        iterable.forEach(reviews::add);
        return reviews;
    }

    public Review updateReview(String id, Review review){
        Long longID = Long.parseLong(id);

        if(reviewRepository.getById(longID) == null){
            throw new NullPointerException();
        }

        review.setId(longID);
        reviewRepository.save(review);
        return reviewRepository.getById(longID);
    }

    public Review getById(Long id){
        return reviewRepository.getById(id);
    }

    public Review getByISBN(String isbn){
        return reviewRepository.getByIsbn(isbn);
    }

}
