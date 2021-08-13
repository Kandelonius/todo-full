import React,{ useState, useEffect } from 'react';

const Login = props => {

    const [item, setItem] = useState();

    React.useEffect(() => {
        // button.addEventListener('mousein', handleMouseIn);
    })

    const changeHandler = e => {
        e.persist();
        let value = e.target.value;
        setItem({
            ...item,
            [e.target.name]: value
        });
    };

    const loginStyle = {
        border: '1px solid rebeccapurple',
        borderRadius: '5px'
    }

    const formStyle = {
        margin: 'auto',
        padding: '10px',
        width: '250px',
        display: 'block'
    }

    return (
        <div className="login-page" style = {loginStyle}>
            <h2>Log In!</h2>
            <form style = {formStyle}>
                <div className = "form-group">
                    <label for = "exampleInputUsername">Username: </label>
                    <input 
                    type = "text" 
                    name = "username" 
                    value = {props.username} 
                    placeholder = "Enter username" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password: </label>
                    <input 
                    type="password" 
                    name = "password"
                    value = {props.password} 
                    placeholder="Password" />
                </div>
                <button type="submit" class="btn btn-primary">Log In</button>
            </form>
        </div> 
    )
}

export default Login;