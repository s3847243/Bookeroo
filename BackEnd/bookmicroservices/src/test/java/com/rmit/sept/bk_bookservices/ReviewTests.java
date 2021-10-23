package com.rmit.sept.bk_bookservices;

import com.rmit.sept.bk_bookservices.Repositories.ReviewRepository;
import com.rmit.sept.bk_bookservices.model.Review;
import com.rmit.sept.bk_bookservices.services.ReviewService;
import com.rmit.sept.bk_bookservices.web.ReviewController;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
public class ReviewTests {
    private Review testReview;

    @InjectMocks
    @Autowired
    private ReviewService testReviewService;

    @MockBean
    private ReviewRepository reviewRepository;

    @MockBean
    private ReviewService reviewService;

    @MockBean
    private ReviewController reviewController;

    @BeforeEach
    public void setup(){
        MockitoAnnotations.initMocks(this);

        testReview = new Review();
        testReview.setBody("10/10");
        testReview.setIsbn("089281506X");
        testReview.setId(Long.parseLong("1"));
    }

    @Test
    void testSetGetMethods() {
        assertTrue(testReview.getBody().equals("10/10"));
        assertTrue(testReview.getIsbn().equals("089281506X"));
        assertTrue(testReview.getId() == Long.parseLong("1"));
    }

}
