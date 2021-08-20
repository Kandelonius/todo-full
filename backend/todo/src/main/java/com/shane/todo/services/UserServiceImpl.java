package com.shane.todo.services;

import com.shane.todo.model.UserModel;
import com.shane.todo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.List;

/**
 * Implements the Userservice Interface
 */
@Transactional
@Service(value = "userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userrepos;

    @Override
    public UserModel findUserById(Long userid) throws EntityNotFoundException {
        /**
         * returns the user with the id or throws an exception and informs the caller that
         * the user doesn't exist
         */
        return userrepos
                .findById(userid).orElseThrow(() -> new EntityNotFoundException
                        ("User id " + userid + " not found"));
    }

    @Transactional
    @Override
    public UserModel save(UserModel user) {
        UserModel newUser = new UserModel();

        if (user.getUserid() != 0) {
            newUser.setUserid(user.getUserid());
        }
        newUser.setUsername(user.getUsername().toLowerCase());
        newUser.setPassword(user.getPassword());

        return userrepos.save(newUser);
    }

    /**
     * @return a list of users
     */
    @Override
    public List<UserModel> findAll() {
        List<UserModel> list = new ArrayList<>();
        userrepos.findAll().iterator().forEachRemaining(list::add);
        return list;
    }
}
