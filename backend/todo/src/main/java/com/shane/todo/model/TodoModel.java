package com.shane.todo.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

// entity allowing interaction with the todo table
@Entity
@Table(name = "todo")
public class TodoModel {

    // primary key of type long even though in this app it's extremely unlikely we'll exceed int capacity
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long todoid;

    // set the completed to false by default
    private boolean completed = false;

    // title, not nullable (String) for the individual tasks
    @Column(nullable = false)
    private String title;

    // the actual task text, not nullable (String) says what to do
    @Column(nullable = false)
    private String description;

    // The User the task belongs to
    @ManyToOne
    @JoinColumn(name = "userid",
            nullable = false)
    @JsonIgnoreProperties(value = "todos", allowSetters = true)
    private UserModel user;

    public TodoModel() {
    }

    public Todos(
            UserModel user,
            String description)
    {
        this.user = user;
        this.description = description;
    }

}
