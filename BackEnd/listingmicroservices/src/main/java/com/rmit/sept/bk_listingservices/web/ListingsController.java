    package com.rmit.sept.bk_listingservices.web;


import com.rmit.sept.bk_listingservices.model.Listing;
import com.rmit.sept.bk_listingservices.services.ListingService;
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
    private ListingService listingService;

    @PostMapping("/create")
    public ResponseEntity<?> createBook(@Valid @RequestBody Listing listing, BindingResult result){
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null)return errorMap;

        Listing newListing = listingService.saveListing(listing);

        return  new ResponseEntity<Listing>(newlisting, HttpStatus.CREATED);

    }

    @GetMapping("")
    public List<Listing> allListing(){
        return listingService.getAllListings();
    }

    @GetMapping("/customer/{id}")
    public List<Listing> getByCustomerId(@PathVariable String id){
        return listingService.findByCustomer(id);
    }

    @GetMapping("/seller/{id}")
    public List<Listing> getBySellerId(@PathVariable String id){
        return listingService.findBySeller(id);
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<?> updateStatus(@PathVariable String id, @Valid @RequestBody String status, BindingResult result){
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null)return errorMap;
        Long longId = Long.parseLong(id);

        Listing updatedlisting = listingService.updateStatus(longId, status);
        return  new ResponseEntity<Listing>(updatedlisting, HttpStatus.OK);
    }
}