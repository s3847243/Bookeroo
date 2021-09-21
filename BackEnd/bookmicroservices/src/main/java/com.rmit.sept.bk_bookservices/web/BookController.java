package com.rmit.sept.bk_bookservices.web;


import com.rmit.sept.bk_bookservices.Repositories.BookRepository;
import com.rmit.sept.bk_bookservices.model.Book;
import com.rmit.sept.bk_bookservices.services.BookService;
import com.rmit.sept.bk_bookservices.services.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

@CrossOrigin
@RestController
@RequestMapping("/api/books")
public class BookController {

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @Autowired
    private BookService bookService;

    @PostMapping("/create")
    public ResponseEntity<?> createBook(@Valid @RequestBody Book book, BindingResult result){
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null)return errorMap;

        Book newBook = bookService.saveBook(book);

        return  new ResponseEntity<Book>(newBook, HttpStatus.CREATED);
    }

    @GetMapping("")
    public List<Book> allBooks(){
        return bookService.getAllBooks();
    }

    @GetMapping("/{id}")
    public Book getById(@PathVariable String id){
        Long bookId = Long.parseLong(id);
        return bookService.getById(bookId);
    }

    @GetMapping("/isbn/{isbn}")
    public Book getByISBN(@PathVariable String isbn){
        return bookService.getByISBN(isbn);
    }


    @GetMapping("/search")
    public List<Book> search(@RequestParam String params){
        return bookService.search(params);
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable String id, @Valid @RequestBody Book book, BindingResult result){
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null)return errorMap;


        Book updatedBook = bookService.updateBook(id, book);

        return  new ResponseEntity<Book>(updatedBook, HttpStatus.CREATED);
    }

    @PostMapping("delete/{id}")
    public ResponseEntity<?> delete(@PathVariable String id){

        bookService.deleteBook(id);
        return new ResponseEntity<>("Book deleted", HttpStatus.OK);
    }
}