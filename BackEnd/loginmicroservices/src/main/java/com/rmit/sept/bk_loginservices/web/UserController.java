package com.rmit.sept.bk_loginservices.web;


import com.rmit.sept.bk_loginservices.model.User;
import com.rmit.sept.bk_loginservices.payload.JWTLoginSucessReponse;
import com.rmit.sept.bk_loginservices.payload.LoginRequest;
import com.rmit.sept.bk_loginservices.security.JwtTokenProvider;
import com.rmit.sept.bk_loginservices.services.CustomUserDetailsService;
import com.rmit.sept.bk_loginservices.services.MapValidationErrorService;
import com.rmit.sept.bk_loginservices.services.UserService;
import com.rmit.sept.bk_loginservices.validator.UserValidator;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import java.util.List;

import static com.rmit.sept.bk_loginservices.security.SecurityConstant.TOKEN_PREFIX;

@CrossOrigin
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @Autowired
    private UserService userService;

    @Autowired
    private UserValidator userValidator;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody User user, BindingResult result){
        // Validate passwords match
        userValidator.validate(user,result);

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null)return errorMap;

        User newUser = userService.saveUser(user);

        return  new ResponseEntity<User>(newUser, HttpStatus.CREATED);
    }


    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private AuthenticationManager authenticationManager;


    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest, BindingResult result){


        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null) return errorMap;

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = TOKEN_PREFIX +  tokenProvider.generateToken(authentication);
        System.out.println("Login success!");

        return ResponseEntity.ok(new JWTLoginSucessReponse(true, jwt));
    }

    @Autowired
    CustomUserDetailsService userDetailsService;

    @GetMapping("")
    public List<User> allUsers(){
        return userDetailsService.getAllUsers();
    }

    @GetMapping("/{id}")
    public User get(@PathVariable String id){
        Long userId = Long.parseLong(id);
        return userDetailsService.loadUserById(userId);
    }

    @PostMapping("/delete/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable String id){
        Long userId = Long.parseLong(id);

        userDetailsService.deleteUser(userId);
        return new ResponseEntity<>("User deleted", HttpStatus.OK);
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<?> deleteUser(@Valid @RequestBody User user, @PathVariable String id, BindingResult result){
        Long userId = Long.parseLong(id);

        userValidator.validate(user,result);

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null)return errorMap;

        userDetailsService.updateUser(userId, user);
        return new ResponseEntity<>("User updated", HttpStatus.OK);
    }

    @GetMapping("/approve")
    public List<User> getUnapproved(){
        return userDetailsService.getUnapprovedUsers();
    }


    @PostMapping("/approve/{id}")
    public ResponseEntity<?> approveUser(@PathVariable String id){
        Long userId = Long.parseLong(id);

        userDetailsService.approveUser(userId);
        return new ResponseEntity<>("User approved", HttpStatus.OK);
    }

    @PostMapping("/blockUser/{id}")
    public ResponseEntity<?> blockUser(@PathVariable String id){
        Long userId = Long.parseLong(id);
        userDetailsService.blockUser(userId);
        return new ResponseEntity<>("User blocked", HttpStatus.OK);
    }

}
