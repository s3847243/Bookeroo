package com.rmit.sept.bk_bookservices.web;

import com.rmit.sept.bk_bookservices.model.Book;
import com.rmit.sept.bk_bookservices.model.Review;
import com.rmit.sept.bk_bookservices.services.MapValidationErrorService;
import com.rmit.sept.bk_bookservices.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @Autowired
    private ReviewService reviewService;

    @PostMapping("/create")
    public ResponseEntity<?> createBook(@Valid @RequestBody Review review, BindingResult result){
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null)return errorMap;

        Review newReview = reviewService.saveReview(review);

        return  new ResponseEntity<Review>(newReview, HttpStatus.CREATED);
    }

    @GetMapping("")
    public List<Review> allReviews(){
        return reviewService.getAllReviews();
    }

    @GetMapping("/{id}")
    public Review getById(@PathVariable String id){
        Long reviewId = Long.parseLong(id);
        return reviewService.getById(reviewId);
    }

    @GetMapping("/isbn/{isbn}")
    public Review getByISBN(@PathVariable String isbn){
        return reviewService.getByISBN(isbn);
    }

    @PostMapping("delete/{id}")
    public ResponseEntity<?> delete(@PathVariable String id){

        reviewService.deleteReview(id);
        return new ResponseEntity<>("Review deleted", HttpStatus.OK);
    }
}
