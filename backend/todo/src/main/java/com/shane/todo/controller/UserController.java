package com.shane.todo.controller;

import com.shane.todo.model.UserModel;
import com.shane.todo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * The entry point for clients to access user data
 */
@RestController
@RequestMapping("/user")
public class UserController {

    /**
     * Using the User service to process user data
     */
    @Autowired
    private UserService userService;

    /**
     * Returns a list of all users
     * <br>Example: <a href="http://localhost:1982/user/users">http://localhost:1982/user/users</a>
     * used for testing
     *
     * @return JSON list of all users with a status of OK
     * @see UserService#findAll() UserService.findAll()
     */
    @GetMapping(value = "/users",
            produces = {"application/json"})
    public ResponseEntity<?> listAllUsers() {
        List<UserModel> allUsers = userService.findAll();
        return new ResponseEntity<>(allUsers, HttpStatus.OK);
    }

    /**
     * Returns a single user based off a user id number
     * <br>Example: <a href="http://localhost:1982/user/user/7">http://localhost:1982/user/user/7</a>
     *
     * @param userid The primary key of the user you seek
     * @return JSON object of the user you seek
     * request is sent to the Interface UserService which is handled by UserServiceImpl
     * @see UserService#findUserById(long) UserService.findUserById(long)
     */
    @GetMapping(value = "/{userid}",
            produces = {"application/json"})
    public ResponseEntity<?> getUserById(
            @PathVariable Long userid) {
        UserModel u = userService.findUserById(userid);
        return new ResponseEntity<>(u, HttpStatus.OK);
    }
}
