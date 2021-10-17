package com.rmit.sept.bk_bookservices.Repositories;

import com.rmit.sept.bk_bookservices.model.Book;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ReviewRepository extends CrudRepository<Book, Long> {

    Book getById(Long id);
    Book getByIsbn(String isbn);
    List<Book> findByTitleContaining(String title);
    List<Book> findByAuthorContaining(String author);
    List<Book> findByGenre(String genre);
}
