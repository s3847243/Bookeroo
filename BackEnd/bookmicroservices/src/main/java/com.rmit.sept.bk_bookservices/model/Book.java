package com.rmit.sept.bk_bookservices.model;

import com.fasterxml.jackson.annotation.JsonIgnore;


import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Digits;
import javax.persistence.*;
import java.util.Date;
import java.util.Collection;

@Entity
public class Book{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "title is required")
    private String title;
    @NotBlank(message = "author is required")
    private String author;
    @NotBlank(message = "isbn is required")
    @Column(unique = true)
    @Digits(fraction = 0, integer = 13)
    private String isbn;
    @NotBlank(message = "genre is required")
    private String genre;
    @NotBlank(message = "publication year is required")
    private int published;

    private Date create_At;
    private Date update_At;

    public Book() {}

    public Long getId() {return id;}
    public void setId(Long id) {this.id = id;}

    public String getTitle() {return title;}
    public void setTitle(String title) {this.title = title;}

    public String getAuthor() {return author; }
    public void setAuthor(String author) {this.author = author; }

    public String getIsbn() {return isbn;}
    public void setIsbn(String isbn) {this.isbn = isbn; }

    public String getGenre() {return genre; }
    public void setGenre(String genre) {this.genre = genre; }

    public int getPublished() { return published; }
    public void setPublished(int published) { this.published = published; }

    public Date getCreate_At() {
        return create_At;
    }
    public void setCreate_At(Date create_At) {
        this.create_At = create_At;
    }

    public Date getUpdate_At() {
        return update_At;
    }
    public void setUpdate_At(Date update_At) {
        this.update_At = update_At;
    }


    @PrePersist
    protected void onCreate(){
        this.create_At = new Date();
    }

    @PreUpdate
    protected void onUpdate(){
        this.update_At = new Date();
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", author='" + author + '\'' +
                ", isbn='" + isbn + '\'' +
                ", genre='" + genre + '\'' +
                ", published='" + published + '\'' +
                ", create_At=" + create_At +
                ", update_At=" + update_At +
                '}';
    }
}
