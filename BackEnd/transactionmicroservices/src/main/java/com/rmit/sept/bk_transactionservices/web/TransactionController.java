package com.rmit.sept.bk_transactionservices.web;


import com.rmit.sept.bk_transactionservices.model.Transaction;
import com.rmit.sept.bk_transactionservices.services.TransactionService;
import com.rmit.sept.bk_transactionservices.services.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import javax.validation.Valid;

@CrossOrigin
@RestController
@RequestMapping("/api/transactions")
public class TransactionController {

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @Autowired
    private TransactionService transactionService;

    @PostMapping("/create")
    public ResponseEntity<?> createBook(@Valid @RequestBody Transaction transaction, BindingResult result){
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null)return errorMap;

        Transaction newTransaction = transactionService.saveTransaction(transaction);

        return  new ResponseEntity<Transaction>(newTransaction, HttpStatus.CREATED);
    }

    @GetMapping("")
    public List<Transaction> allTransactions(){
        return transactionService.getAllTransactions();
    }

    @GetMapping("/customer/{id}")
    public List<Transaction> getByCustomerId(@PathVariable String id){
        return transactionService.findByCustomer(id);
    }

    @GetMapping("/seller/{id}")
    public List<Transaction> getBySellerId(@PathVariable String id){
        return transactionService.findBySeller(id);
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<?> updateStatus(@PathVariable String id, @Valid @RequestBody String status, BindingResult result){
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null)return errorMap;
        Long longId = Long.parseLong(id);

        Transaction updatedTransaction = transactionService.updateStatus(longId, status);
        return  new ResponseEntity<Transaction>(updatedTransaction, HttpStatus.OK);
    }
}