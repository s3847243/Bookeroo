package com.rmit.sept.bk_bookservices.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;
import java.util.Collection;

@Entity
public class Book implements Entity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "title is required")
    private String title;
    @NotBlank(message = "author is required")
    private String author;
    @NotBlank(message = "publishing date is required")
    private Date published;

    private Date create_At;
    private Date update_At;


    public book (){}

    public Long getId() {return id;}

    public void setId(Long id) {this.id = id;}

    public String getTitle()

    public void setTitle(String title) {this.title = title;}

    public String getAuthor() {return author; }

    public void setAuthor(String author) {this.author = author; }

    public Date getPublished() {return published; }

    public void setPublished(Date published) {this.published = published; }

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

