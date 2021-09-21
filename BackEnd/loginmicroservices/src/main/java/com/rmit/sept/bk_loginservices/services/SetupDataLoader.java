package com.rmit.sept.bk_loginservices.services;

import javax.persistence.*;

import com.rmit.sept.bk_loginservices.Repositories.PrivilegeRepository;
import com.rmit.sept.bk_loginservices.Repositories.RoleRepository;
import com.rmit.sept.bk_loginservices.Repositories.UserRepository;
import com.rmit.sept.bk_loginservices.model.Privilege;
import com.rmit.sept.bk_loginservices.model.Role;
import com.rmit.sept.bk_loginservices.model.User;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;


@Component
public class SetupDataLoader implements
        ApplicationListener<ContextRefreshedEvent> {

    boolean setup = false;

    @Autowired
    UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PrivilegeRepository privilegeRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    @Transactional
    public void onApplicationEvent(ContextRefreshedEvent event) {
        if (setup)
            return;
        Privilege userReadPrivilege
                = createPrivilegeIfNotFound("USER_READ");
        Privilege userWritePrivilege
                = createPrivilegeIfNotFound("USER_WRITE");
        Privilege bookReadPrivilege
                = createPrivilegeIfNotFound("BOOK_READ");
        Privilege bookWritePrivilege
                = createPrivilegeIfNotFound("BOOK_WRITE");
        Privilege listingReadPrivilege
                = createPrivilegeIfNotFound("LISTING_READ");
        Privilege listingWritePrivilege
                = createPrivilegeIfNotFound("LISTING_WRITE");

        List<Privilege> adminPrivileges = Arrays.asList(
                userReadPrivilege, userWritePrivilege, bookReadPrivilege, bookWritePrivilege);
        List<Privilege> businessPrivileges = Arrays.asList(
                userReadPrivilege, bookReadPrivilege, bookWritePrivilege);
        List<Privilege> userPrivileges = Arrays.asList(
                userReadPrivilege, bookReadPrivilege, listingReadPrivilege, listingWritePrivilege);

        createRoleIfNotFound("ADMIN", adminPrivileges);
        createRoleIfNotFound("BUSINESS", businessPrivileges);
        createRoleIfNotFound("USER", userPrivileges);

        User sampleAdmin = new User();
        sampleAdmin.setUsername("admin@bookeroo.com");
        sampleAdmin.setFullName("John Smith");
        sampleAdmin.setPassword(bCryptPasswordEncoder.encode("password123"));
        sampleAdmin.setAddress("123 Street");
        sampleAdmin.setPhoneNum("1234567890");
        sampleAdmin.setUserType("ADMIN");
        sampleAdmin.setEnabled(true);
        userRepository.save(sampleAdmin);

        System.out.println("Data setup");
        setup = true;
    }

    @Transactional
    Privilege createPrivilegeIfNotFound(String name) {

        Privilege privilege = privilegeRepository.findByName(name);
        if (privilege == null) {
            privilege = new Privilege();
            privilege.setName(name);
            privilegeRepository.save(privilege);
        }
        return privilege;
    }

    @Transactional
    Role createRoleIfNotFound(
            String name, Collection<Privilege> privileges) {

        Role role = roleRepository.findByName(name);
        if (role == null) {
            role = new Role();
            role.setName(name);
            role.setPrivileges(privileges);
            roleRepository.save(role);
        }
        return role;
    }
}