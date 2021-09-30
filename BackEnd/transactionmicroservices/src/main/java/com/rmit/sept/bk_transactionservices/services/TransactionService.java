package com.rmit.sept.bk_transactionservices.services;


import com.rmit.sept.bk_transactionservices.Repositories.TransactionRepository;
import com.rmit.sept.bk_transactionservices.model.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.ArrayList;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    public Transaction saveTransaction (Transaction newTransaction){
        try{
            return transactionRepository.save(newTransaction);
        }catch (Exception e){
            throw e;
        }
    }

    public List<Transaction> getAllTransactions() {
        Iterable<Transaction> iterable = transactionRepository.findAll();
        List<Transaction> books = new ArrayList<>();

        iterable.forEach(books::add);
        return books;
    }

    public List<Transaction> findByCustomer(String customerId){
        return transactionRepository.findByCustomerId(customerId);
    }

    public List<Transaction> findBySeller(String sellerId){
        return transactionRepository.findBySellerId(sellerId);
    }

    public Transaction updateStatus(Long id, String status){
        Transaction transaction = transactionRepository.getById(id);

        if(transaction == null){
            throw new NullPointerException();
        }

        transaction.setStatus(status);
        transactionRepository.save(transaction);
        return transactionRepository.getById(id);
    }

}