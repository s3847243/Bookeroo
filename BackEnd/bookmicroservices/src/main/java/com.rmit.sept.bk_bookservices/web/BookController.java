package com.rmit.sept.bk_bookservices.web;


import com.rmit.sept.bk_bookservices.model.Book;
import com.rmit.sept.bk_bookservices.services.BookService;
import com.rmit.sept.bk_bookservices.services.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;

import javax.validation.Valid;

@CrossOrigin
@RestController
@RequestMapping("/api/books")
public class BookController {

    private static final Logger LOGGER = LogManager.getLogger(BookController.class);

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @Autowired
    private BookService bookService;

    @PostMapping("/create")
    public ResponseEntity<?> createBook(@Valid @RequestBody Book book, BindingResult result){
        LOGGER.debug("createBook Called");
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null)return errorMap;

        Book newBook = bookService.saveBook(book);

        return  new ResponseEntity<Book>(newBook, HttpStatus.CREATED);
    }

    @GetMapping("")
    public List<Book> allBooks(){
        LOGGER.debug("allBooks called");
        return bookService.getAllBooks();
    }

    @GetMapping("/{id}")
    public Book getById(@PathVariable String id){
        LOGGER.debug("getById called");
        Long bookId = Long.parseLong(id);
        return bookService.getById(bookId);
    }

    @GetMapping("/isbn/{isbn}")
    public Book getByISBN(@PathVariable String isbn){
        LOGGER.debug("getByISBN called");
        return bookService.getByISBN(isbn);
    }


    @GetMapping("/search")
    public List<Book> search(@RequestParam String params){
        LOGGER.debug("search called");
        return bookService.search(params);
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable String id, @Valid @RequestBody Book book, BindingResult result){
        LOGGER.debug("update called");
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null)return errorMap;


        Book updatedBook = bookService.updateBook(id, book);
        return  new ResponseEntity<Book>(updatedBook, HttpStatus.CREATED);

    }

    @PostMapping("delete/{id}")
    public ResponseEntity<?> delete(@PathVariable String id){
        LOGGER.debug("delete called");
        bookService.deleteBook(id);
        return new ResponseEntity<>("Book deleted", HttpStatus.OK);
    }
}