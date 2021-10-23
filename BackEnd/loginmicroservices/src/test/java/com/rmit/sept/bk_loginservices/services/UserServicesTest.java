package com.rmit.sept.bk_loginservices.services;

import com.rmit.sept.bk_loginservices.Repositories.RoleRepository;
import com.rmit.sept.bk_loginservices.Repositories.UserRepository;
import com.rmit.sept.bk_loginservices.model.Role;
import com.rmit.sept.bk_loginservices.model.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
class UserServicesTest {
    private User testUser;
    private final Long id = Long.parseLong("1");
    private final String username = "johnsmith@gmail.com";
    private final String fullName = ("John Smith");
    private final String password = ("password123");

    @MockBean
    private UserRepository userRepository;
    @MockBean
    private RoleRepository roleRepository;
    @MockBean
    private BCryptPasswordEncoder bCryptPasswordEncoder;


    @BeforeEach
    public void setup(){
        MockitoAnnotations.initMocks(this);
        testUser = new User();
        testUser.setId(id);
        testUser.setUsername(username);
        testUser.setPassword(password);
        testUser.setFullName(fullName);

        Mockito.when(bCryptPasswordEncoder.encode(Mockito.any())).thenReturn("encodedPass");
        Mockito.when(userRepository.findByUsername(username)).thenReturn(testUser);
        Mockito.when(userRepository.getById(id)).thenReturn(testUser);
    }

    @InjectMocks
    @Autowired
    private UserService testUserService;

    @Test
    void registerUserEnabled() {
        testUser.setUserType("USER");

        Role userRole = new Role();
        userRole.setName("USER");
        Mockito.when(roleRepository.findByName(Mockito.any())).thenReturn(userRole);
        Mockito.when(userRepository.save(Mockito.any(User.class)))
                .thenAnswer(i -> i.getArguments()[0]);

        User response = testUserService.saveUser(testUser);
        assertTrue(response.isEnabled());
    }

    @Test
    void registerBusinessDisabled() {
        testUser.setUserType("BUSINESS");

        Role businessRole = new Role();
        businessRole.setName("BUSINESS");
        Mockito.when(roleRepository.findByName(Mockito.any())).thenReturn(businessRole);

        Mockito.when(userRepository.save(Mockito.any(User.class)))
                .thenAnswer(i -> i.getArguments()[0]);

        User response = testUserService.saveUser(testUser);
        assertFalse(response.isEnabled());
    }

    @InjectMocks
    @Autowired
    private CustomUserDetailsService testUserDetailsService;

    @Test
    void loadUsername(){
        assertEquals(testUser, testUserDetailsService.loadUserByUsername(username));
    }

    @Test
    void loadID(){
        assertEquals(testUser, testUserDetailsService.loadUserById(id));
    }

    @Test
    void getUsers(){
        User user1 = new User();
        User user2 = new User();
        Mockito.when(userRepository.findAll()).thenReturn(
                Arrays.asList(user1, user2));


        assertEquals(2, testUserDetailsService.getAllUsers().size());
    }

    @Test
    void deleteUser(){
        assertTrue(testUserDetailsService.deleteUser(id));
    }

    @Test
    void updateUser(){
        User updatedDetails = new User();
        updatedDetails.setFullName("Johnathan Smith");
        updatedDetails.setId(id);
        updatedDetails.setUsername(username);
        updatedDetails.setPassword(password);


        Mockito.when(userRepository.save(Mockito.any(User.class)))
                .thenAnswer(i -> i.getArguments()[0]);

        User response = testUserDetailsService.updateUser(id, updatedDetails);
        testUser.setFullName("Johnathan Smith");

        assertEquals(id, response.getId());
    }

    @Test
    void getUnapprovedUsers(){
        testUser.setUserType("BUSINESS");

        Role businessRole = new Role();
        businessRole.setName("BUSINESS");
        Mockito.when(roleRepository.findByName(Mockito.any())).thenReturn(businessRole);

        Mockito.when(userRepository.save(Mockito.any(User.class)))
                .thenAnswer(i -> i.getArguments()[0]);

        testUser = testUserService.saveUser(testUser);
        Mockito.when(userRepository.findByEnabled(false)).thenReturn(Arrays.asList(testUser));

        assertEquals(1, testUserDetailsService.getUnapprovedUsers().size());
    }


}