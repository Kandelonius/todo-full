package com.shane.todo.services;

import com.shane.todo.model.UserModel;
import com.shane.todo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;

//@Service
public class MyUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepository userrepos;

    public UserModel findByName(String name)
    {
        UserModel uu = userrepos.findByUsername(name.toLowerCase());
        if (uu == null)
        {
            throw new EntityNotFoundException("User name " + name + " not found!");
        }
        return uu;
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        return null;
    }
}
