package com.rmit.sept.bk_bookservices.model;

import javax.persistence.*;
import javax.validation.constraints.Digits;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "reviewer is required")
    private String reviewer;
    @NotBlank(message = "isbn is required")
    @Column(unique = true)
    @Digits(fraction = 0, integer = 13)
    private String isbn;
    @NotBlank(message = "rating is required")
    private int rating;
    @NotBlank(message = "body is required")
    private String body;
    @Transient
    private Date create_At;
    private Date update_At;

    public Review() {}

    public Long getId() {return id;}
    public void setId(Long id) {this.id = id;}

    public String getIsbn() {return isbn;}
    public void setIsbn(String isbn) {this.isbn = isbn; }

    public String getReviewer() {
        return reviewer;
    }
    public void setReviewer(String reviewer) {
        this.reviewer = reviewer;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
    public int getRating() {return rating;}

    public void setIsbn(int rating) {this.rating = rating; }

    public String getBody() {return body;}
    public void setBody(String body) {this.body = body; }

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
        return "Review{" +
                "id=" + id +
                ", reviewer='" + reviewer + '\'' +
                ", isbn='" + isbn + '\'' +
                ", rating=" + rating +
                ", body='" + body + '\'' +
                ", create_At=" + create_At +
                ", update_At=" + update_At +
                '}';
    }

}
