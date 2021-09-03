package com.rmit.sept.bk_bookservices.services;


import com.rmit.sept.bk_bookservices.model.Book;
import com.rmit.sept.bk_bookservices.Repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public Book saveBook (Book newBook){
        try{
            newBook.setTitle(newBook.getTitle);
            newBook.setAuthor(newbook.getAuthor)
            newBook.setISBN(newBook.setISBN);
            return bookRepository.save(newBook);

        }catch (Exception e){
            throw new UsernameAlreadyExistsException("Username '"+newUser.getUsername()+"' already exists");
        }

    }
}