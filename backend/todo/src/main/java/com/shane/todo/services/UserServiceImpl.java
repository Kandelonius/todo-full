package com.shane.todo.services;

import com.shane.todo.model.UserModel;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Implements the Userservice Interface
 */
@Transactional
@Service(value = "userService")
public class UserServiceImpl implements UserService {
    @Override
    public UserModel findUserById(Long userid) {
        return null;
    }
}
