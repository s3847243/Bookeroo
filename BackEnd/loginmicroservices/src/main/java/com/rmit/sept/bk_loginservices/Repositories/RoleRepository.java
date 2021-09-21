package com.rmit.sept.bk_loginservices.Repositories;

import com.rmit.sept.bk_loginservices.model.Role;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends CrudRepository<Role, Long> {
    Role findByName(String name);
}
