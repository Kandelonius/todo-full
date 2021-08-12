package com.shane.todo.model;

import javax.persistence.*;

// entity allowing interaction with the user table
@Entity
@Table(name = "user")
public class UserModel {

    // primary key of type long even though in this app it's extremely unlikely we'll exceed int capacity
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long userid;
}
