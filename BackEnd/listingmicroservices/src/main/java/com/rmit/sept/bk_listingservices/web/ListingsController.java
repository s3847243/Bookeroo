package com.rmit.sept.bk_listingservices.web;


import com.rmit.sept.bk_listingservices.model.Listing;
import com.rmit.sept.bk_listingservices.services.ListingsService;
import com.rmit.sept.bk_listingservices.services.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import javax.validation.Valid;

@CrossOrigin
@RestController
@RequestMapping("/api/listings")
public class ListingsController {

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @Autowired
    private ListingsService listingService;

    @PostMapping("/create")
    public ResponseEntity<?> createListing(@Valid @RequestBody Listing listing, BindingResult result){
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null)return errorMap;

        Listing newListing = listingService.saveListing(listing);

        return  new ResponseEntity<Listing>(newListing, HttpStatus.CREATED);
    }

    @GetMapping("")
    public List<Listing> allListing(){
        return listingService.getAllListings();
    }

    @GetMapping("/seller/{id}")
    public List<Listing> getBySellerId(@PathVariable String id){
        return listingService.findBySeller(id);
    }

    @GetMapping("/isbn/{isbn}")
    public List<Listing> getByIsbn(@PathVariable String isbn){
        return listingService.findByIsbn(isbn);
    }

    @PostMapping("/delete/{id}")
    public ResponseEntity<?> deleteListing(@PathVariable String id){
        listingService.deleteListing(id);
        return  new ResponseEntity<>("Listing deleted", HttpStatus.OK);
    }

}