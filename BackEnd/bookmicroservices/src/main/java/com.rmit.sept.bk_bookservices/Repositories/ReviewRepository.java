package com.rmit.sept.bk_bookservices.Repositories;

import com.rmit.sept.bk_bookservices.model.Book;
import com.rmit.sept.bk_bookservices.model.Review;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ReviewRepository extends CrudRepository<Review, Long> {

    Review getById(Long id);
    Review getByIsbn(String isbn);
    List<Review> findByTitleContaining(String title);
    List<Review> findByAuthorContaining(String author);
    List<Review> findByGenre(String genre);
}
