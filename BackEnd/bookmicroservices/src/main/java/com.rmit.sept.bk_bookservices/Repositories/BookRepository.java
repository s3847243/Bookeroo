package com.rmit.sept.bk_bookservices.Repositories;

import com.rmit.sept.bk_bookservices.model.Book;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {

    Book getById(Long id);
    Book getByIsbn(String isbn);
    List<Book> findByTitleContaining(String title);
    List<Book> findByAuthorContaining(String author);
    List<Book> findByGenre(String genre);
    List<Book> findByTitleContainingAndAuthorContaining(String title, String author);
    List<Book> findByTitleContainingAndAuthorContainingAndGenre(String title, String author, String genre);
    List<Book> findByTitleContainingAndGenre(String title, String genre);
    List<Book> findByAuthorContainingAndGenre(String author, String genre);
    List<Book> findByPublished(int published);
}
