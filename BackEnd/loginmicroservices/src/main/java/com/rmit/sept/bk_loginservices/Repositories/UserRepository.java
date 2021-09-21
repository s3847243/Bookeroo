package com.rmit.sept.bk_loginservices.Repositories;

import com.rmit.sept.bk_loginservices.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    User findByUsername(String username);
    User getById(Long id);
    List<User> findByEnabled(Boolean enabled);
}
