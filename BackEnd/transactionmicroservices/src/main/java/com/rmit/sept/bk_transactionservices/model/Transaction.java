package com.rmit.sept.bk_transactionservices.model;

import javax.validation.constraints.NotBlank;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "book id is required")
    private String bookId;
    @NotBlank(message = "customer id is required")
    private String customerId;
    @NotBlank(message = "seller id is required")
    private String sellerId;
    @NotNull(message = "value is required")
    private int value;
    @NotBlank(message = "status is required")
    private String status;
    private Date create_At;
    private Date update_At;

    public Transaction() {}

    public Long getId() {return id;}
    public void setId(Long id) {this.id = id;}

    public String getBookId() {
        return bookId;
    }
    public void setBookId(String bookId) {
        this.bookId = bookId;
    }

    public String getCustomerId() {
        return customerId;
    }
    public void setCustomerId(String customerId) {
        this.customerId = customerId;
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

    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
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
                ", bookId=" + bookId +
                ", customerId=" + customerId +
                ", sellerId=" + sellerId +
                ", value=" + value +
                ", status=" + status +
                ", create_At=" + create_At +
                ", update_At=" + update_At +
                '}';
    }
}
