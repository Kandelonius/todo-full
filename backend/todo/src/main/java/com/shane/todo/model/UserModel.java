package com.shane.todo.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

// entity allowing interaction with the user table
@Entity
@Table(name = "user")
public class UserModel {

    // primary key of type long even though in this app it's extremely unlikely we'll exceed int capacity
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long userid;

    // user name (String) must be unique, cannot be null
    @Column(nullable = false,
        unique = true)
    private String username;

    // password, cannot be null. Never gets displayed
    @Column(nullable = false)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    @OneToMany(mappedBy = "user",
    cascade = CascadeType.ALL,
    orphanRemoval = true)
    @JsonIgnoreProperties(value = "user", allowSetters = true)
    private List<TodoModel> todos = new ArrayList<>();

    public UserModel() {
    }

    public UserModel(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public long getUserid() {
        return userid;
    }

    public void setUserid(long userid) {
        this.userid = userid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<TodoModel> getTodos() {
        return todos;
    }

    public void setTodos(List<TodoModel> todos) {
        this.todos = todos;
    }
}
