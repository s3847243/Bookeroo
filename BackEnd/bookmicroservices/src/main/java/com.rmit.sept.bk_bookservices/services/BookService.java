package com.rmit.sept.bk_bookservices.services;


import com.rmit.sept.bk_bookservices.model.Book;
import com.rmit.sept.bk_bookservices.Repositories.BookRepository;
import com.rmit.sept.bk_bookservices.exceptions.ISBNAlreadyExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.ArrayList;

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

    public List<Book> getAllBooks() {
        Iterable<Book> iterable = bookRepository.findAll();
        List<Book> books = new ArrayList<>();

        iterable.forEach(books::add);
        return books;
    }

    public Book getById(Long id){
        return bookRepository.getById(id);
    }
}