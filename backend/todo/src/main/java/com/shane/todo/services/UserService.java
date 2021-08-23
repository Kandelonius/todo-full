package com.shane.todo.services;

import com.shane.todo.model.UserModel;

import java.util.List;

public interface UserService {

    /**
     * Returns the user with the given primary key.
     *
     * @param userid The primary key (long) of the user you seek.
     * @return The given User or throws an exception if not found.
     */
    UserModel findUserById(Long userid);

    /**
     * used to save new users when one is posted
     *
     * @param user from UserModel
     * @return a new user
     */
    UserModel save(UserModel user);

    public UserModel findByName(String name);

    /**
     * used for testing to get user ids
     *
     * @return List<user>
     */
    List<UserModel> findAll();
}
