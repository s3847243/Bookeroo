package com.rmit.sept.bk_loginservices.services;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.rmit.sept.bk_loginservices.Repositories.UserRepository;
import com.rmit.sept.bk_loginservices.model.Privilege;
import com.rmit.sept.bk_loginservices.model.User;
import com.rmit.sept.bk_loginservices.model.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if(user==null) new UsernameNotFoundException("User not found");
        return user;
    }


    @Transactional
    public User loadUserById(Long id){
        User user = userRepository.getById(id);
        if(user==null) new UsernameNotFoundException("User not found");
        return user;

    }

    public List<User> getAllUsers() {
        Iterable<User> iterable = userRepository.findAll();
        List<User> users = new ArrayList<>();

        iterable.forEach(users::add);
        return users;
    }

    public boolean deleteUser(Long id){
        if(userRepository.getById(id) == null){
            return false;
        }

        userRepository.deleteById(id);
        return true;

    }

    public User updateUser(Long id, User user){
        if(userRepository.getById(id) == null){
            throw new UsernameNotFoundException("User not found");
        }

        user.setId(id);
        return userRepository.save(user);
    }

    public List<User> getUnapprovedUsers() {
        Iterable<User> iterable = userRepository.findByEnabled(false);
        List<User> users = new ArrayList<>();

        iterable.forEach(users::add);
        return users;
    }

    public boolean userApproval(Long id, Boolean approved){
        User user = userRepository.getById(id);
        boolean returnVal = false;
        if(user != null){
            user.setEnabled(approved);
            userRepository.save(user);
            returnVal = true;
        }

        return returnVal;
    }

    private Collection<? extends GrantedAuthority> getAuthorities(User user){
        return user.getAuthorities();
    }

}
