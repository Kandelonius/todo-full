package com.shane.todo;

import com.shane.todo.model.UserModel;
import com.shane.todo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;

@Transactional
@Component
public class SeedData implements CommandLineRunner {

    @Autowired
    UserService userservice;

    /**
     * Generates test, seed data for this application
     * First a set of known data is seeded into our database.
     * Note this process does not remove data from the database. So if data exists in the database
     * prior to running this process, that data remains in the database.
     *
     * @param args The parameter is required by the parent interface but is not used in this process.
     */
    @Transactional
    @Override
    public void run(String[] args) throws Exception {
        UserModel u1 = new UserModel("John", "secure");

        userservice.save(u1);
    }
}
