package com.rmit.sept.bk_bookservices.services;


import com.rmit.sept.bk_bookservices.model.Book;
import com.rmit.sept.bk_bookservices.Repositories.BookRepository;
import com.rmit.sept.bk_bookservices.exceptions.ISBNAlreadyExistsException;
import org.springframework.beans.factory.annotation.Autowired;
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

        Book oldBook = bookRepository.getById(longID);

        try{
            oldBook.setTitle(book.getTitle());
            oldBook.setAuthor(book.getAuthor());
            oldBook.setIsbn(book.getIsbn());
            oldBook.setGenre(book.getGenre());
            oldBook.setPublished(book.getPublished());
            return oldBook;

        }catch (Exception e){
            throw new ISBNAlreadyExistsException("ISBN '"+oldBook.getIsbn()+"' already exists");
        }
    }

    public Book getById(Long id){
        return bookRepository.getById(id);
    }

    public Book getByISBN(String isbn){
        return bookRepository.getByIsbn(isbn);
    }

    public List<Book> search(Map<String, String> parameters){
        String title = parameters.get("title");
        String author = parameters.get("author");
        String genre = parameters.get(("genre"));

        List<Book> results = null;

        if (!parameters.get("title").equals(null) && parameters.get("author").equals(null) && parameters.get("genre").equals(null)){
            results = bookRepository.findByAuthorContainingAndGenre(author, genre);
        }else if (!parameters.get("title").equals(null) && !parameters.get("author").equals(null) && parameters.get("genre").equals(null)){
            results = bookRepository.findByGenre(genre);
        }else if (parameters.get("title").equals(null) && parameters.get("author").equals(null) && !parameters.get("genre").equals(null)){
            results = bookRepository.findByTitleContainingAndAuthorContaining(title, author);
        }else if (parameters.get("title").equals(null) && !parameters.get("author").equals(null) && !parameters.get("genre").equals(null)){
            results = bookRepository.findByTitleContaining(title);
        }else if (!parameters.get("title").equals(null) && parameters.get("author").equals(null) && !parameters.get("genre").equals(null)){
            results = bookRepository.findByAuthorContaining(author);
        }else if (parameters.get("title").equals(null) && !parameters.get("author").equals(null) && parameters.get("genre").equals(null)){
            results = bookRepository.findByTitleContainingAndGenre(title, genre);
        }else if (!parameters.get("title").equals(null) && !parameters.get("author").equals(null) && !parameters.get("genre").equals(null)){
            results = bookRepository.findByTitleContainingAndAuthorContainingAndGenre(title, author, genre);
        }

        return results;
    }
}