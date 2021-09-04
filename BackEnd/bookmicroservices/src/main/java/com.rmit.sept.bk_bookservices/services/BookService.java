package com.rmit.sept.bk_bookservices.services;


import com.rmit.sept.bk_bookservices.model.Book;
import com.rmit.sept.bk_bookservices.Repositories.BookRepository;
import com.rmit.sept.bk_bookservices.exceptions.ISBNAlreadyExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.ArrayList;
import org.springframework.stereotype.Service;


public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public Book addBook (Book newBook){
        try{
            newBook.setTitle(newBook.getTitle());
            newBook.setAuthor(newBook.getAuthor());
            newBook.setISBN(newBook.getISBN());
            return bookRepository.save(newBook);

        }catch (Exception e){
            throw new ISBNAlreadyExistsException("ISBN '"+newBook.getISBN()+"' already exists");
        }

    }

    public List<Book> getAllBooks() {
        Iterable iterable = bookRepository.findAll();
        List books = new ArrayList<Book>();

        iterable.forEach(book -> books.add(book));
        return books;
    }

    public Book getById(Long id){
        return bookRepository.getById(id);
    }
}