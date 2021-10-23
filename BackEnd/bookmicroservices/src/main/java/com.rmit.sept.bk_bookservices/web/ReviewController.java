package com.rmit.sept.bk_bookservices.web;

import com.rmit.sept.bk_bookservices.model.Review;
import com.rmit.sept.bk_bookservices.services.MapValidationErrorService;
import com.rmit.sept.bk_bookservices.services.ReviewService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
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

    private final Logger logger = LogManager.getLogger(ReviewController.class);

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @Autowired
    private ReviewService reviewService;

    @PostMapping("/create")
    public ResponseEntity<?> createReview(@Valid @RequestBody Review review, BindingResult result){
        logger.debug("createReview Called");
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null)return errorMap;

        Review newReview = reviewService.saveReview(review);

        return  new ResponseEntity<Review>(newReview, HttpStatus.CREATED);
    }

    @GetMapping("")
    public List<Review> allReviews(){
        logger.debug("allReviews Called");
        return reviewService.getAllReviews();
    }

    @GetMapping("/review/{id}")
    public Review getById(@PathVariable String id){
        logger.debug("getById Called");
        Long reviewId = Long.parseLong(id);
        return reviewService.getById(reviewId);
    }

    @GetMapping("/isbn/{isbn}")
    public List<Review> getByISBN(@PathVariable String isbn){
        logger.debug("getByISBN Called");
        return reviewService.getAllByISBN(isbn);
    }

    @PostMapping("delete/{id}")
    public ResponseEntity<?> delete(@PathVariable String id){
        logger.debug("delete Called");

        reviewService.deleteReview(id);
        return new ResponseEntity<>("Review deleted", HttpStatus.OK);
    }
}
