package com.rmit.sept.bk_listingservices.Repositories;

import com.rmit.sept.bk_listingservices.model.Listing;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ListingsRepository extends CrudRepository<Listing, Long> {

    Listing getById(Long id);
    List<Listing> findByBookId(String bookId);
    List<Listing> findBySellerId(String sellerId);
}
