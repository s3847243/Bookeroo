package com.rmit.sept.bk_bookservices;

import com.rmit.sept.bk_bookservices.Repositories.BookRepository;
import com.rmit.sept.bk_bookservices.model.Book;
import com.rmit.sept.bk_bookservices.services.BookService;
import com.rmit.sept.bk_bookservices.web.BookController;
import org.junit.Before;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class ApplicationTests {

	private Book testBook;

	@InjectMocks
	@Autowired
	private BookService testBookService;

	@MockBean
	private BookRepository bookRepository;

	@MockBean
	private BookService bookService;

	@MockBean
	private BookController bookController;

	@BeforeEach
	public void setup(){
		MockitoAnnotations.initMocks(this);

		testBook = new Book();
		testBook.setTitle("Revolt Against the Modern World");
		testBook.setAuthor("Julius Evola");
		testBook.setGenre("Politics");
		testBook.setPublished(1);
		testBook.setIsbn("089281506X");
		testBook.setId(Long.parseLong("1"));
	}

	@Test
	void testSetGetMethods() {
		assertTrue(testBook.getAuthor() == "Julius Evola");
		assertTrue(testBook.getTitle() == "Revolt Against the Modern World");
		assertTrue(testBook.getGenre() == "Politics");
		assertTrue(testBook.getPublished() == 1);
		assertTrue(testBook.getIsbn() == "089281506X");
		assertTrue(testBook.getId() == Long.parseLong("1"));
	}

}
