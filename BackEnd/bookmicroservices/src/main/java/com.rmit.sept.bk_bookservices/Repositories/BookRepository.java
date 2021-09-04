package com.rmit.sept.bk_bookservices.Repositories;

import com.rmit.sept.bk_bookservices.model.Book;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {

    Book getById(Long id);
    Book getByISBN(int isbn);
    List<Book> findByTitle(String title);
    List<Book> findByAuthor(String author);
}
