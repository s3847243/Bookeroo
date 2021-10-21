package com.rmit.sept.bk_listingservices.model;

import org.springframework.web.bind.annotation.CrossOrigin;

import javax.validation.constraints.NotBlank;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
public class Listing {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull(message = "bookTitle is required")
    private String bookTitle;
    @NotBlank(message = "book id is required")
    private String bookId;
    @NotNull(message = "seller name is required")
    private int sellerName;
    @NotBlank(message = "seller id is required")
    private String sellerId;
    @NotNull(message = "value is required")
    private int value;
    @NotNull(message = "condition is required")
    private String condition;
    @NotNull(message = "isbn is required")
    private int isbn;

    private Date create_At;
    private Date update_At;

    public Listing() {}

    public Long getId() {return id;}
    public void setId(Long id) {this.id = id;}

    public String getBookId() {
        return bookId;
    }
    public void setBookId(String bookId) {
        this.bookId = bookId;
    }

    public String getSellerId() {
        return sellerId;
    }
    public void setSellerId(String sellerId) {
        this.sellerId = sellerId;
    }

    public int getValue() {
        return value;
    }
    public void setValue(int value) {
        this.value = value;
    }

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

    public String getBookTitle() {
        return bookTitle;
    }

    public void setBookTitle(String bookTitle) {
        this.bookTitle = bookTitle;
    }

    public int getSellerName() {
        return sellerName;
    }

    public void setSellerName(int sellerName) {
        this.sellerName = sellerName;
    }

    public String getCondition() {
        return condition;
    }

    public void setCondition(String condition) {
        this.condition = condition;
    }

    public int getIsbn() {
        return isbn;
    }

    public void setIsbn(int isbn) {
        this.isbn = isbn;
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
        return "Listing{" +
                "id=" + id +
                ", bookTitle='" + bookTitle + '\'' +
                ", bookId='" + bookId + '\'' +
                ", sellerName=" + sellerName +
                ", sellerId='" + sellerId + '\'' +
                ", value=" + value +
                ", condition=" + condition +
                ", isbn=" + isbn +
                ", create_At=" + create_At +
                ", update_At=" + update_At +
                '}';
    }
}
