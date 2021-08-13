# Todo backend

### Can add a user and the user can add tasks, see tasks, complete tasks and delete tasks.

#### API Layer including GET | POST | PUT | DELETE
#### Service Layer
#### Data Access Layer
#### Database using H2

<details>
<summary>POST http://localhost:1982/users/user</summary>

DATA

```JSON
  {
      "username": "James",
      "password": "Secure",
      "todos": [
          {
              "description": "Build a kite"
          },
          {
              "description": "Fly a kite"
          }
      ]
  }
```

OUTPUT

```TEXT
Status OK
http://localhost:1982/users/user/2
```

</details>
