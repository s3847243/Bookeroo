package com.rmit.sept.bk_bookservices.services;


import com.rmit.sept.bk_bookservices.model.Book;
import com.rmit.sept.bk_bookservices.Repositories.BookRepository;
import com.rmit.sept.bk_bookservices.exceptions.ISBNAlreadyExistsException;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public Book saveBook (Book newBook){
        try{
            newBook.setTitle(newBook.getTitle());
            newBook.setAuthor(newBook.getAuthor());
            newBook.setIsbn(newBook.getIsbn());
            return bookRepository.save(newBook);

        }catch (Exception e){
            throw new ISBNAlreadyExistsException("ISBN '"+newBook.getIsbn()+"' already exists");
        }

    }

    public void deleteBook(String id){
        Long longId = Long.parseLong(id);
        bookRepository.delete(bookRepository.getById(longId));
    }

    public List<Book> getAllBooks() {
        Iterable<Book> iterable = bookRepository.findAll();
        List<Book> books = new ArrayList<>();

        iterable.forEach(books::add);
        return books;
    }

    public Book updateBook(String id, Book book){
        Long longID = Long.parseLong(id);

        if(bookRepository.getById(longID) == null){
            throw new NullPointerException();
        }

        book.setId(longID);
        bookRepository.save(book);
        return bookRepository.getById(longID);
    }

    public Book getById(Long id){
        return bookRepository.getById(id);
    }

    public Book getByISBN(String isbn){
        return bookRepository.getByIsbn(isbn);
    }

    public List<Book> search(String parameters){
        String formattedParams = parameters.substring(0, 1).toUpperCase() + parameters.substring(1);
        List<Book> results = bookRepository.findByTitleContaining(formattedParams);
        results.addAll(bookRepository.findByAuthorContaining(formattedParams));
        results.addAll(bookRepository.findByGenre(formattedParams));
        return results;
    }
}