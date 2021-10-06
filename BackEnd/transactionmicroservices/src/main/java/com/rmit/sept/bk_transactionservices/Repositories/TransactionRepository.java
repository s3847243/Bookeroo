package com.rmit.sept.bk_transactionservices.Repositories;

import com.rmit.sept.bk_transactionservices.model.Transaction;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface TransactionRepository extends CrudRepository<Transaction, Long> {

    Transaction getById(Long id);
    List<Transaction> findByBookId(String bookId);
    List<Transaction> findByCustomerId(String customerId);
    List<Transaction> findBySellerId(String sellerId);
}
