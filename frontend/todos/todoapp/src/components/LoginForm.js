import React, { Component } from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";

class LoginForm extends Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(e);
        // props.Login(details);
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        // if the creds match what is in the database, the server will return a JSON web token
        // set the token to localStorage (sessions)
        // navigate the user to the "/protected" route
        axiosWithAuth()
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/totos");
      })
      .catch(err => console.log(err));
    };

    loginStyle = {
        border: '1px solid rebeccapurple',
        borderRadius: '5px',
        display: 'flex',
        margin: '10% auto',
        flexDirection: 'column',
        height: '500'
    }

    formStyle = {
        padding: '10px',
        width: '300px'
    }

    divStyle = {
        padding: '3%'
    }

    render() {
        return (
            <div className="login-page" style={this.loginStyle}>
                <h2>Log In!</h2>
                <form style={this.formStyle} onSubmit={this.handleSubmit}>
                    <div style={this.divStyle}>
                        <label for="exampleInputUsername">Username: </label>
                        <input
                            placeholder="Enter username"
                            type="text"
                            name="username"
                            onChange={this.handleChange}
                            value={this.state.credentials.username} />
                    </div>
                    <div style={this.divStyle}>
                        <label for="exampleInputPassword1">Password: </label>
                        <input
                            placeholder="Password"
                            type="password"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.credentials.password} />
                    </div>
                    <button type="submit">Log In</button>
                </form>
            </div>
        )
    }
}

export default LoginForm;