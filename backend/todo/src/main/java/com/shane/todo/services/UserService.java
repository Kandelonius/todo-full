package com.shane.todo.services;

import com.shane.todo.model.UserModel;

public interface UserService {

    /**
     * Returns the user with the given primary key.
     *
     * @param userid The primary key (long) of the user you seek.
     * @return The given User or throws an exception if not found.
     */
    UserModel findUserById(Long userid);
}
