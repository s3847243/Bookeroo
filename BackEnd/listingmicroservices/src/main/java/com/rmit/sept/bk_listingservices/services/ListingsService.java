package com.rmit.sept.bk_listingservices.services;


import com.rmit.sept.bk_listingservices.Repositories.ListingsRepository;
import com.rmit.sept.bk_listingservices.model.Listing;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.ArrayList;

@Service
public class ListingsService {

    @Autowired
    private ListingsRepository listingsRepository;

    public Listing saveListing (Listing newListing){
        try{
            return listingsRepository.save(newListing);
        }catch (Exception e){
            throw e;
        }
    }

    public List<Listing> getAllListings() {
        Iterable<Listing> iterable = listingsRepository.findAll();
        List<Listing> books = new ArrayList<>();

        iterable.forEach(books::add);
        return books;
    }

    public List<Listing> findBySeller(String sellerId){
        return listingsRepository.findBySellerId(sellerId);
    }

    public List<Listing> findByIsbn(String isbn){
        return listingsRepository.findByIsbn(isbn);
    }

    public void deleteListing(String id){
        Long longId = Long.parseLong(id);
        listingsRepository.delete(listingsRepository.getById(longId));
    }
}